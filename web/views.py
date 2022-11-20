from django.views import generic


class HomeView(generic.TemplateView):
    template_name = 'index.html'


class DashboardView(generic.TemplateView):
    template_name = 'dashboard.html'

class CostCenterView(generic.TemplateView):
    template_name = 'cost_center.html'

class UserView(generic.TemplateView):
    template_name = 'user.html'


home = HomeView.as_view()
dashboard = DashboardView.as_view()
costcenter = CostCenterView.as_view()
user = UserView.as_view()




