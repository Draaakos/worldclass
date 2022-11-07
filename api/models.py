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


class Car(models.Model):
    patent = models.CharField(max_length=50, unique=True, primary_key=True )
    car_type = models.CharField(max_length=100) #BRAND
    color = models.CharField(max_length=100)
    car_model = models.CharField(max_length=100) 

    def to_json(self):
        return {
            'patent': self.patent,
            'car_type': self.car_type,
            'color': self.color,
            'car_model': self.car_model
        }


class Company(models.Model):
    name = models.CharField(max_length=130)
    
    
class PersonType(models.Model):
    name = models.CharField(max_length=50)
