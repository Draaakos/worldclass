import json
from django.views import View
from django.http import JsonResponse
from api.models import Person
from api.models import Car
from api.models import CostCenter

class DashboardView(View):
    def get(self, request, **kwargs):
        
        if request.session.get('person_logged_id'):
            return JsonResponse({
                'status': 200,
                'personList': self._fetch_dashboard_person_data(),
                'carList': self._fetch_dashboard_car_data(),
                'costcenterList': self._fetch_dashboard_costcenter_data()
            })
        else:
            return JsonResponse({
                'status': 500,
                'personList': [],
                'carList': [],
                'costcenterList': []
            })
        

    def _fetch_dashboard_person_data(self):
        return [ person.to_json() for person in Person.objects.all() ]
    
    def _fetch_dashboard_car_data(self):
        return [ car.to_json() for car in Car.objects.all() ]

    def _fetch_dashboard_costcenter_data(self):
        return [ costcenter.to_json() for costcenter in CostCenter.objects.all() ]