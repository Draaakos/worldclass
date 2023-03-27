import json
from django.views import View
from django.http import JsonResponse
from api.models import Mining
from ..utils.mining import mining_data

class MiningView(View):
     def post(self, request):
        data = json.loads(request.body)
        mining = self._add_new_mining(data)

        try:
            return JsonResponse({
                "item": mining.to_json(),
                "message": "creado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al agregar la faena",
                "status": 500
            })

     def _add_new_mining(self, data):
        name = data.get('name')
        code = data.get('code')

        mining = Mining()
        mining.name = name
        mining.code = code
        mining.save()

        return mining

     def get(self, request):
        return JsonResponse({
            "response": [ mining.to_json() for mining in Mining.objects.all() ]
        })

     def put(self, request, id):
        data = json.loads(request.body)
        self._edit_mining(data, id)

        try:
            return JsonResponse({
                "message": "editado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al editar la faena",
                "status": 500
            })

     def _edit_mining(self, data, id):
        name = data.get("name")
        code = data.get("code")
        cost_center = data.get('cost_center')

        mining = Mining.objects.get(pk=id)
        mining.name = name
        mining.code = code
        mining.cost_center_id = cost_center
        mining.save()

        return mining

     def delete(self, request, **kwargs):
        id = kwargs.get('id')

        try:
            mining = Mining.objects.get(pk=id)
            mining.delete()

            return JsonResponse({
                "message": "eliminado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al eliminar la faena",
                "status": 500
            })
