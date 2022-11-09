from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from .controllers.login import LoginView
from .controllers.register import RegisterView
from .controllers.dashboard import DashboardView
from .controllers.car_data import CardDataView
from .controllers.cost_center import CostCenterView
from .controllers.person_data import PersonDataView

register = RegisterView.as_view()
login = LoginView.as_view()
dashboard = DashboardView.as_view()
car_data = CardDataView.as_view()
cost_center = CostCenterView.as_view()
person_data = PersonDataView.as_view()