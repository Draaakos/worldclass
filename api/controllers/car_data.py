import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Car

class CardDataView(View):
    def get(self, request, **kwargs):
        return JsonResponse({
            "car_list": [ car.to_json() for car in Car.objects.all() ]
        })

    def post(self, request):
        data = json.loads(request.body)
        

    # def _add_new_car(self, patent, car_type_id)


    # get    => obtener => ok
    # post   => agregar
    # put    => actualizar
    # delete => eliminar