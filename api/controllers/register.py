import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Person

class RegisterView(View):
    def post(self, request):
        data = json.loads(request.body)
        
        try:
            self._add_new_user(data)
            return JsonResponse({
                'message': 'Usuario creado correctamente',
                'status': 200
            })
        except:
            return JsonResponse({
                'message': 'Hubo un error',
                'status': 500
            })
    #ERROR
    def _add_new_user(self, data):
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        person_type = data.get('personType')

        person = Person();
        person.username = username.lower()
        person.password = password
        person.email = email
        person.person_type_id = person_type
        person.save();

        return person 

