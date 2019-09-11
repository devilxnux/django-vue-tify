from django.core import validators
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _


# This is a sample of validator
@deconstructible
class ShortIPValidator(validators.RegexValidator):
    regex = r'^[0-9]{9}$'
    message = _(
        'Enter a valid short IP. This value may contain only numbers, '
        'maximum 9 characters long'
    )
