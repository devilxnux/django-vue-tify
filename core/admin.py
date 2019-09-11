from django.conf import settings
from django.contrib import admin
from django.contrib.auth import models as auth_models
from django.contrib.auth.admin import GroupAdmin as AuthGroupAdmin
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin
from django.utils.translation import gettext_lazy as _

from . import models

admin.site.unregister(auth_models.Group)
admin.site.site_header = settings.APP_TITLE


# Register your models here.
@admin.register(models.User)
class UserAdmin(AuthUserAdmin):
    pass


@admin.register(models.Group)
class GroupAdmin(AuthGroupAdmin):
    pass
