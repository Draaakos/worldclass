import json
from django.views import View
from django.http import JsonResponse
from api.models import Person

class PersonDataView(View):
    def get(self, request):
        try:
            return JsonResponse({
                "person_list": [ person.to_json() for person in Person.objects.all()],
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al obtener los usuarios",
                "status": 500
            })

    def post(self, request):
        data = json.loads(request.body)
        # person_type = request.session.get('person_type')
        
        try:
            self._create_person(data)
            return JsonResponse({
                "message": "usuario agregado correctamente",
                "status": 200
            })
        except:
            return JsonResponse({
                "message": "error al agregar usuario",
                "status": 500
            })

    def _create_person(self, data):
        username = data.get("username")
        password = data.get("password")
        email = data.get("email")

        person = Person()
        person.username = username
        person.password = password
        person.email = email
        person.save()

        return person

    def put(self, request, id):
        data = json.loads(request.body)
        self._edit_person(data, id)

        try:
            return JsonResponse({
                "message": "usuario editado correctamente",
                "status": 200

            })
        except:
            return JsonResponse({
                "message": "error al editar usuario",
                "status": 500
            })

    def _edit_person(self, data, id):
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        person = Person.objects.get(id=id)
        person.username = username
        person.password = password
        person.email = email
        person.save()

        return person
    
    def delete(self, data, id):
        try:
            person = Person.objects.get(id=id)
            person.delete()
            
            return JsonResponse({
                "message": "usuario eliminado correctamente",
                "status": 200

            })
        except:
            return JsonResponse({
                "message": "error al eliminar usuario",
                "status": 500
            })