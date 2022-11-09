import json
from django.views import View
from django.http import JsonResponse
from api.models import Car

class CardDataView(View):
    def get(self, request, **kwargs):
        try:
            return JsonResponse({
                "car_list": [ car.to_json() for car in Car.objects.all() ],
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al obtener los vehiculos",
                "status": 500
            })

    def post(self, request):
        data = json.loads(request.body)
        try: 
            self._add_new_car(data)
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

        car = Car();
        car.patent = patent
        car.color = color
        car.car_model_id = 1
        car.car_type_id = 1
        car.cost_center_id = "J823JDEC8JR9EJASDI"
        car.save()

        return car

    
    def put(self, request, id):
        data = json.loads(request.body)

        try: 
            self._edit_car(data, id)
            return JsonResponse({
                "message": "vehiculo editado correctamente",
                "status": 200
            })
        except: 
            return JsonResponse({
                "message": "error al editar vehiculo",
                "status": 500
            })


    def _edit_car(self, data, id):
        color = data.get('color')
        cost_center = data.get('cost_center')

        car = Car.objects.get(patent=id)
        car.color = color
        car.cost_center_id = cost_center
        car.save()

        return car

    def delete(self, id):
        try:
            car = Car.objects.get(patent=id)
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