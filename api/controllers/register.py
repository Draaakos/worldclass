import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Person, PersonCostCenter

PERSON_TYPES = {
    'ADMIN': 1,
    'MODERATOR': 2,
    'USER': 3
}

class RegisterView(View):
    def post(self, request):
        session_user_id_active = request.session.get('person_logged_id')
        person_active = Person.objects.get(pk=session_user_id_active)
        data = json.loads(request.body)

        try:
            person = self._add_new_user(data, person_active)
            return JsonResponse({
                'status': 200,
                'item': person,
                'msg': person['msg']
            })
        except:
            return JsonResponse({
                'msg': 'Hubo un error',
                'status': 500
            })

    def _add_new_user(self, data, person_active):
        if person_active.person_type_id == PERSON_TYPES['ADMIN'] or person_active.person_type_id == PERSON_TYPES['MODERATOR']:
            username = data.get('username')
            password = data.get('password')
            email = data.get('email')
            person_type = data.get('personType')
            cost_center = data.get('costCenter')

            person = Person()
            person.username = username.lower()
            person.password = password
            person.email = email
            person.person_type_id = person_type
            person.save()

            person_cost_center = PersonCostCenter()
            person_cost_center.cost_center_id = cost_center
            person_cost_center.person = person
            person_cost_center.save()

            return {
                'person': person.to_json(),
                'msg': 'Usuario creado correctamente'
            }
        else:
            return {
                'person': None,
                'msg': 'No tienes permisos para crear usuario'
            }

