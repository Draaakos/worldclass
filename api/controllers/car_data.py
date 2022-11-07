import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Car

class CardDataView(View):
    def get(self, request):

        car_list = Car.objects.all()
        list = []

        for car in car_list:
            list.append(car.to_json())

        return JsonResponse({
            "car_list": list
        })