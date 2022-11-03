from django.views import View
from django.http import JsonResponse

class LoginView(View):
    def get(self, request, **kwargs):
        return JsonResponse({
            'test': 'ok'
        })

login = LoginView.as_view()