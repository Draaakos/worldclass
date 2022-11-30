import json
from django.views import View
from django.http import JsonResponse
from api.models import Person
from api.models import Car
from api.models import CostCenter
from ..utils.cost_center import cost_center_data
from ..utils.car_type import car_type_data

class DashboardView(View):
    def get(self, request, **kwargs):
        if request.session.get('person_logged_id'):
            return JsonResponse({
                'status': 200,
                'personList': self._fetch_dashboard_person_data(),
                'costCenterList': self._fetch_cost_center_data(),
                'carList': self._fetch_dashboard_car_data(),
                'selectors': {
                    'carType': car_type_data(),
                    'costCenter': cost_center_data()
                }
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

    def _fetch_cost_center_data(self):
        return [ cost_center.to_json() for cost_center in CostCenter.objects.all() ]
