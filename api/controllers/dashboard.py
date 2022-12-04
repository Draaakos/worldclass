import json
from django.views import View
from django.http import JsonResponse
from api.models import Person, PersonCostCenter
from api.models import Car
from api.models import CostCenter
from ..utils.cost_center import cost_center_data
from ..utils.car_type import car_type_data
from ..utils.user_type import user_type_data
from ..enum import PersonTypeEnum


class DashboardView(View):
    def get(self, request, **kwargs):
        person_logged_id = request.session.get('person_logged_id')
        person_type_id_logged = request.session.get('person_type_id')
        person_cost_center_id_logged = request.session.get('person_cost_center_id')


        if person_logged_id:
            return JsonResponse({
                'status': 200,
                'userType': person_type_id_logged,
                'personList': self._fetch_dashboard_person_data(person_type_id_logged, person_cost_center_id_logged, person_logged_id),
                'costCenterList': self._fetch_cost_center_data(person_type_id_logged, person_cost_center_id_logged),
                'carList': self._fetch_dashboard_car_data(person_type_id_logged, person_cost_center_id_logged),
                'selectors': {
                    'carType': car_type_data(),
                    'costCenter': cost_center_data(),
                    'userType': user_type_data(person_logged_id)
                }
            })
        else:
            return JsonResponse({
                'status': 500,
                'personList': [],
                'carList': [],
                'costcenterList': []
            })


    def _fetch_dashboard_person_data(self, person_type, cost_center, person_logged_id):
        person_list = []
        if person_type == PersonTypeEnum.ADMIN.value:
            person_list = []
            for person in Person.objects.all():
                if person_logged_id != person.id:
                    person_list.append(person.to_json())
        elif person_type == PersonTypeEnum.MODERATOR.value:
            for person_cost_center_data in PersonCostCenter.objects.filter(cost_center=cost_center):
                person = Person.objects.get(pk=person_cost_center_data.person.id)
                person_list.append(person.to_json())
        return person_list

    def _fetch_dashboard_car_data(self, person_type, cost_center):
        return [ car.to_json() for car in Car.objects.all() ] if person_type == PersonTypeEnum.ADMIN.value else [ car.to_json() for car in Car.objects.filter(cost_center=cost_center) ]

    def _fetch_cost_center_data(self, person_type, cost_center):
        return [ cost_center.to_json() for cost_center in CostCenter.objects.all() ] if person_type == PersonTypeEnum.ADMIN.value else []
