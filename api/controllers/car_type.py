import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import CarType
from ..utils.car_type import car_type_data

class CarTypeView(View):
    def post(self, request):
        data = json.loads(request.body)
        self._add_new_car_type(data)

        try:
            return JsonResponse({
                "message": "vehiculo agregado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al crear tipo de vehiculo",
                "status": 500
            })

    def _add_new_car_type(self, data):
        name = data.get('name')

        car_type = CarType()
        car_type.name = name
        car_type.save()

        return car_type

    def put(self, request, id):
        data = json.loads(request.body)
        self._edit_car_type(data, id)

        try:
            return JsonResponse({
                "message": "vehiculo editado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al editar tipo de vehiculo",
                "status": 500
            })

    def _edit_car_type(self, data, id):
        name = data.get('name')

        car_type = CarType.objects.get(id=id)
        car_type.name = name
        car_type.save()

        return car_type

    def delete(self, request, id):
        car_type = CarType.objects.get(id=id)
        car_type.delete()

        try:
            return JsonResponse({
                "message": "vehiculo borrado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al eliminar tipo de vehiculo",
                "status": 500
            })
