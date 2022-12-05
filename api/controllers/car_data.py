import json
from django.views import View
from django.http import JsonResponse
from api.models import Car
from django.contrib.auth.decorators import login_required
from ..enum import PersonTypeEnum


class CardDataView(View):
    def post(self, request):
        data = json.loads(request.body)

        self._add_new_car(data)
        try:
            return JsonResponse({
                "message": "vehiculo agregado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al agregar vehiculo",
                "status": 500
            })

    def _add_new_car(self, data):
        patent = data.get('patent')
        color = data.get('color')
        cost_center_id = data.get('costCenter')
        car_type_id = data.get('carType')
        car_model = data.get('carModel')

        car = Car()
        car.patent = patent
        car.color = color
        car.car_type_id = car_type_id
        car.cost_center_id = cost_center_id
        car.car_model = car_model
        car.save()

        return car


    def put(self, request, **kwargs):
        data = json.loads(request.body)
        id = kwargs.get('id')

        # try:
        car = self._edit_car(data, id)
        return JsonResponse({
            "car": car.to_json(),
            "message": "vehiculo editado correctamente",
            "status": 200
        })
        # except:
        #     return JsonResponse({
        #         "message": "error al editar vehiculo",
        #         "status": 500
        #     })


    def _edit_car(self, data, id):
        color = data.get('color')
        cost_center = data.get('costCenter')
        car_model = data.get('carModel')
        car_type = data.get('carType')

        car = Car.objects.get(pk=id)
        car.color = color
        car.car_model = car_model
        car.car_type_id = car_type
        car.cost_center_id = cost_center
        car.save()

        return car

    def delete(self, request, **kwargs):
        id = kwargs.get('id')

        try:
            car = Car.objects.get(pk=id)
            car.delete()

            return JsonResponse({
                "message": "Vehiculo eliminado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message:": "error al eliminar vehiculo",
                "status": 500
            })
