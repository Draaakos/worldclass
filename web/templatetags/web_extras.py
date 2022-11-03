import hashlib
import random
from django import template
from django.templatetags.static import static

register = template.Library()

def create_hash_token():
    random_number = str(random.random()).encode('ascii')
    token = hashlib.md5()
    token.update(random_number)
    return token.hexdigest()

token = create_hash_token()

@register.simple_tag
def version(path):
    static_path = static(path) + '?v=' + token
    return static_path