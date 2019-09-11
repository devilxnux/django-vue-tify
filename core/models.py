from os import path
from re import sub

from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group as AuthGroup
from django.utils.translation import gettext_lazy as _

# Create your models here.


class User(AbstractUser):
    pass


class Group(AuthGroup):
    class Meta:
        proxy = True
