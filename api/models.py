from django.db import models

class Person(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=100)

    def to_json(self):
        return {
            'username': self.username,
            'email': self.email
        }
