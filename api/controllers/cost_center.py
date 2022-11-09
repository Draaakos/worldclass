import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import CostCenter

class CostCenterView(View):
    def get(self, request, **kwargs):
        try:   
            return JsonResponse({
                "data": [cost_center.to_json() for cost_center in CostCenter.objects.all()],
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al obtener los centros de costo",
                "status": 500
            })

    def post(self, request):
        data = json.loads(request.body)
        self._add_new_cost_center(data)

        try:
            return JsonResponse({
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
        cost_center.save()

        return cost_center

    def put(self, request, id):
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

        cost_center = CostCenter.objects.get(id=id)
        cost_center.name = name
        cost_center.code = code
        cost_center.save()

        return cost_center

    def delete(self, id):
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
        


