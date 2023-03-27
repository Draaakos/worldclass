import json
from django.views import View
from django.http import JsonResponse
from api.models import CostCenter, Mining
from ..utils.cost_center import cost_center_data

class CostCenterView(View):
    def get(self, request):
        return JsonResponse({
            "response": [ cost_center.to_json() for cost_center in CostCenter.objects.all() ]
        })

    def post(self, request):
        data = json.loads(request.body)
        cost_center = self._add_new_cost_center(data)

        try:
            return JsonResponse({
                "item": cost_center.to_json(),
                "message": "creado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al agregar el centro de costo",
                "status": 500
            })

    def _add_new_cost_center(self, data):
        name = data.get('name')
        code = data.get('code')
        cost_center = CostCenter()
        cost_center.name = name
        cost_center.code = code
        cost_center.mining = Mining.objects.get(pk=data.get('mining'))
        cost_center.save()

        return cost_center

    def put(self, request, **kwargs):
        id = kwargs.get("id")
        data = json.loads(request.body)
        self._edit_cost_center(data, id)

        try:
            return JsonResponse({
                "message": "editado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al editar el centro de costo",
                "status": 500
            })

    def _edit_cost_center(self, data, id):
        name = data.get("name")
        code = data.get("code")
        mining = data.get("mining")

        cost_center = CostCenter.objects.get(id=id)
        cost_center.name = name
        cost_center.code = code
        cost_center.mining_id = mining
        cost_center.save()

        return cost_center

    def delete(self, request, **kwargs):
        id = kwargs.get('id')

        try:
            cost_center = CostCenter.objects.get(id=id)
            cost_center.delete()

            return JsonResponse({
                "message": "eliminado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al eliminar centro de costo",
                "status": 500
            })



