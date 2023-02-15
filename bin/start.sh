#!/bin/bash
python manage.py makemigrations && \
python manage.py migrate && \
python manage.py collectstatic --noinput && \
gunicorn -c bin/gunicorn.config.py server.wsgi:application
