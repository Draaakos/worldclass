import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Person

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)
        person = self._is_authenticated(data)

        if len(person):
            request.session['is_logged'] = 1
            request.session['person_logged_id'] = person[0].id
            request.session['person_type_id'] = person[0].person_type.id

            person_auth = Person.objects.get(pk=person[0].id)
            request.session['mining_id'] = person_auth.mining.id if person_auth.mining.id else "ADMIN"

            return JsonResponse({
                "msg": "Usuario autenticado correctamente",
                "status": 200,
                "user": {
                    "name": person[0].username,
                    "email": person[0].email,
                    'id': person[0].id
                }
            })
        else:
            return JsonResponse({
                "msg": "Usuario y/o contraseña incorrectos",
                "status": 500
            })

    def _is_authenticated(self, data):
        username = data.get('username')
        password = data.get('password')

        return Person.objects.filter(
            username=username.lower(),
            password=password
        )

    def _is_logged(self, request, data):
        person_id = request.session.get('id')











