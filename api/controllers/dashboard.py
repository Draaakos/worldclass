import json
from django.views import View
from django.http import JsonResponse
from api.models import Person


class DashboardView(View):
    def get(self, request, **kwargs):
        
        if request.session.get('person_logged_id'):
            return JsonResponse({
                'status': 200,
                'personList': self._fetch_dashboard_data()
            })
        else:
            return JsonResponse({
                'status': 500,
                'personList': []
            })
        

    def _fetch_dashboard_data(self):
        return [ person.to_json() for person in Person.objects.all() ]