import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import Person

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)

        try:
            person = self._is_authenticated(data)
            return JsonResponse({
                "message": "Usuario autenticado correctamente",
                "status": 1,
                "user": {
                    "name": person.username,
                    "email": person.email
                }
            })
        except:
            return JsonResponse({
                "message": "Hubo un error",
                "status": 0
            })

    def _is_authenticated(self, data):
        username = data.get('username')
        password = data.get('password')
        
        return Person.objects.get(
            username=username.lower(), 
            password=password
        )
        




        
    



