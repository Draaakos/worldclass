from django.views import generic

class HomeView(generic.TemplateView):
    template_name = 'index.html'

home = HomeView.as_view()
