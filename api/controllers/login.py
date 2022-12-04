import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Person, PersonCostCenter

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)

        try:
            person = self._is_authenticated(data)

            request.session['is_logged'] = 1
            request.session['person_logged_id'] = person.id
            request.session['person_type_id'] = person.person_type.id

            person_cost_center = PersonCostCenter.objects.filter(person_id=person.id)
            request.session['person_cost_center_id'] = person_cost_center[0].cost_center.id

            return JsonResponse({
                "msg": "Usuario autenticado correctamente",
                "status": 200,
                "user": {
                    "name": person.username,
                    "email": person.email,
                    'id': person.id
                }
            })
        except:
            return JsonResponse({
                "msg": "Usuario y/o contraseña incorrectos",
                "status": 500
            })

    def _is_authenticated(self, data):
        username = data.get('username')
        password = data.get('password')

        return Person.objects.get(
            username=username.lower(),
            password=password
        )

    def _is_logged(self, request, data):
        person_id = request.session.get('id')











