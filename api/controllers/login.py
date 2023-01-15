import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Person, PersonCostCenter

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)

        person = self._is_authenticated(data)

        if len(person):
            request.session['is_logged'] = 1
            request.session['person_logged_id'] = person[0].id
            request.session['person_type_id'] = person[0].person_type.id

            person_cost_center = PersonCostCenter.objects.filter(person_id=person[0].id)
            request.session['person_cost_center_id'] = person_cost_center[0].cost_center.id if len(person_cost_center) > 0 else "ADMIN"

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











