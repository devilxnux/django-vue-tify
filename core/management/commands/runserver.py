import json
import os
import time
from subprocess import PIPE, Popen

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from django.core.management.commands.runserver import \
    Command as BaseRunserverCommand


class Command(BaseRunserverCommand):
    help = 'Run django and webpack development server simultaneously for easy development cycle'
    npm_pid = None
    stats_file = settings.WEBPACK_LOADER['DEFAULT']['STATS_FILE']

    def _load_stats(self):
        try:
            with open(self.stats_file, encoding='utf-8') as f:
                return json.load(f)
        except IOError:
            raise IOError(
                'Error reading {}. Are you sure webpack has generated the file and the path is correct?'.format(
                    stats_file)
            )

    def inner_run(self, *args, **options):
        try:
            os.remove(self.stats_file)
        except NotImplementedError as err:
            raise NotImplementedError(
                'Error removing stats file "{}". Method dir_fd is not implemented in your operating system'.format(self.stats_file))
        self.npm_pid = Popen(['npm', 'run', 'serve'])
        # Wait until stats file is available
        while os.path.isfile(self.stats_file) == False:
            time.sleep(1)
        # Wait for webpack to write stats file
        stats = self._load_stats()
        # Wait while webpack is compiling source files
        while stats['status'] == 'compiling':
            time.sleep(0.5)
            stats = self._load_stats()
        # Overwrite unused informations
        for n in range(7):
            self.stdout.write('\033[A\r\033[K\033[A')
        # Run the django development server
        return super().inner_run(*args, **options)
