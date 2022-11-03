import os

DEBUG = True
EMAIL_HOST_USER = "drakosddos@gmail.com"
EMAIL_HOST_PASSWORD = "vunyunslhlxecwql"


def configure_db_instance(BASE_DIR):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

    return DATABASES