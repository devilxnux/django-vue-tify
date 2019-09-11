import os
from base64 import b64encode


def create_salt():
    return b64encode(os.urandom(9)).decode('utf-8')
