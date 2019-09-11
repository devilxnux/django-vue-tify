from datetime import datetime, timedelta
from hashlib import sha256
from uuid import uuid4

from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.utils.translation import gettext_lazy as _

from . import models, utils


def api_response(message, data={}, status=200):
    return JsonResponse({
        'error': False if 200 <= status <= 299 else True,
        'message': message,
        'data': data
    }, status=status)

def index(request: HttpRequest):
    return api_response('Hello World!')
