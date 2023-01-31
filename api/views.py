from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from .controllers.login import LoginView
from .controllers.register import RegisterView
from .controllers.dashboard import DashboardView
from .controllers.car_data import CardDataView
from .controllers.cost_center import CostCenterView
from .controllers.person_data import PersonDataView
from .controllers.person_type import PersonTypeView
from .controllers.car_type import CarTypeView
from .controllers.car_document import CarDocumentView
from .controllers.mining import MiningView


class LogoutView(View):
    def get(self, request):
        request.session['is_logged'] = 0
        request.session['person_logged_id'] = None

        return JsonResponse({
            'msg': 'sesion finalizada'
        })


register = RegisterView.as_view()
login = LoginView.as_view()
logout = LogoutView.as_view()
dashboard = DashboardView.as_view()
car_data = CardDataView.as_view()
cost_center = CostCenterView.as_view()
mining = MiningView.as_view()
person_data = PersonDataView.as_view()
person_type = PersonTypeView.as_view()
car_type = CarTypeView.as_view()
car_document = CarDocumentView.as_view()
