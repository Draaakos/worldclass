import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import PersonType

class PersonTypeView(View):
    def get(self, request):
        try:
            return JsonResponse({
                "personTypeData": [ person_type.to_json() for person_type in PersonType.objects.all() ],
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al obtener los tipos de usuarios",
                "status": 500
            })


    def post(self, request):
        data = json.loads(request.body)
        self._create_person_type(data)
        
        try:
            return JsonResponse({
                "message": "tipo de usuario creado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al crear el tipo de usuario",
                "status": 500
            })

    def _create_person_type(self, data):
        name = data.get('name')

        person_type = PersonType()
        person_type.name = name
        person_type.save()

        return person_type


    def put(self, request, id):
        data = json.loads(request.body)
        self._edit_person_type(data, id)

        try:
            return JsonResponse({
                "message": "ok",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al editar el tipo de usuario",
                "status": 500
            })

    def _edit_person_type(self, data, id):
        name = data.get('name')
        
        person_type = PersonType.objects.get(id=id)
        person_type.name = name
        person_type.save()

        return person_type


    def delete(self, request, **kwargs):
        id = kwargs.get('id')

        try:
            person_type = PersonType.objects.get(id=id)
            person_type.delete()

            return JsonResponse({
                "message": "usuario eliminado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al eliminar el usuario",
                "status": 500
            })



