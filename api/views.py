from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from .controllers.login import LoginView
from .controllers.register import RegisterView
from .controllers.dashboard import DashboardView

# class RegisterView(View):
register = RegisterView.as_view()
login = LoginView.as_view()
dashboard = DashboardView.as_view()

