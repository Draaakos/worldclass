from django.db import models


class CostCenter(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=50, unique=True)

    def to_json(self):
        return {
            'id': self.id,
            'code': self.code,
            'name': self.name
        }


class PersonType(models.Model):
    name = models.CharField(max_length=70)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Person(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    person_type = models.ForeignKey(PersonType, on_delete=models.CASCADE, null=False, blank=False)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'personType': self.person_type.name
        }


class CarType(models.Model):
    name = models.CharField(max_length=30)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Car(models.Model):
    patent = models.CharField(max_length=6)
    color = models.CharField(max_length=100)
    car_model = models.CharField(max_length=100)
    car_type = models.ForeignKey(CarType, on_delete=models.CASCADE, null=False, blank=False)
    cost_center = models.ForeignKey(CostCenter, on_delete=models.CASCADE, null=False, blank=False)

    def to_json(self):
        return {
            'id': self.id,
            'patent': self.patent,
            'carType': self.car_type.id,
            'color': self.color,
            'costCenter': self.cost_center.id,
            'carModel': self.car_model
        }


class Company(models.Model):
    name = models.CharField(max_length=130)
