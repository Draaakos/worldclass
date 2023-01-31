import json
from django.views import View
from django.http import JsonResponse
from api.models import Mining
from ..utils.mining_service import mining_service_data


class MiningView(View):
     def post(self, request):
        data = json.loads(request.body)
        mining_service = self._add_new_mining_service(data)
        cost_center = request.session.get('cost_center')

        try:
            return JsonResponse({
                "item": mining_service.to_json(),
                "message": "creado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al agregar la faena",
                "status": 500
            })

     def _add_new_mining_service(self, data):
        name = data.get('name')
        code = data.get('code')
        
        mining_service = Mining()
        mining_service.name = name
        mining_service.code = code
        mining_service.save()

        return mining_service

    
     def get(self, request): 
        return JsonResponse({
            "response": [ mining_service.to_json() for mining_service in Mining.objects.all() ]
        })

    
     def put(self, request, id):
        data = json.loads(request.body)
        self._edit_mining_service(data, id)

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

     def _edit_mining_service(self, data, id):
        name = data.get("name")
        code = data.get("code")
        cost_center = data.get('cost_center')


        mining_service = Mining.objects.get(pk=id)
        mining_service.name = name
        mining_service.code = code
        mining_service.cost_center_id = cost_center
        mining_service.save()

        return mining_service

     def delete(self, request, **kwargs):
        id = kwargs.get('id')

        try:
            mining_service = Mining.objects.get(pk=id)
            mining_service.delete()

            return JsonResponse({
                "message": "eliminado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al eliminar la faena",
                "status": 500
            })
        