from django.db import models
from .tools import define_product_path


class CostCenter(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)

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


class PersonCostCenter(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, null=False, blank=False)
    cost_center = models.ForeignKey(CostCenter, on_delete=models.CASCADE, null=False, blank=False)


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
    status = models.IntegerField(default=1)
    car_type = models.ForeignKey(CarType, on_delete=models.CASCADE, null=False, blank=False)
    cost_center = models.ForeignKey(CostCenter, on_delete=models.CASCADE, null=False, blank=False)

    def to_json(self):
        return {
            'id': self.id,
            'patent': self.patent,
            'carType': self.car_type.id,
            'color': self.color,
            'costCenter': self.cost_center.id,
            'carModel': self.car_model,
            'documents': fetch_documents(self),
            'status': self.status
        }


class Document(models.Model):
    name = models.CharField(max_length=50)
    upload = models.FileField(upload_to=define_product_path)
    # expired_date = models.DateField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'path': f'/media/{self.name}'
        }


class CarDocument(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE, null=False, blank=False)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, null=False, blank=False)



def fetch_documents(car):
    document_list = []
    for car_document in CarDocument.objects.filter(car=car):
        document = Document.objects.get(pk=car_document.document.id)
        document_list.append(document.to_json())
    return document_list
