import json
from django.views import View
from django.http import JsonResponse
from api.models import Person, PersonCostCenter
from api.models import Car, CarDocument, Document
from api.models import CostCenter
from api.models import Mining
from ..utils.cost_center import cost_center_data
from ..utils.mining import mining_data
from ..utils.car_type import car_type_data
from ..utils.user_type import user_type_data
from ..utils.document_type import document_type_data
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
                'miningList': self._fetch_mining_data(),
                'carList': self._fetch_dashboard_car_data(person_type_id_logged, person_cost_center_id_logged),
                'selectors': {
                    'carType': car_type_data(),
                    'costCenter': cost_center_data(person_logged_id, person_cost_center_id_logged),
                    'mining': self._fetch_mining_data(),
                    'userType': user_type_data(person_logged_id),
                    'documentType': document_type_data(),
                    'carStatus': [
                        {
                            'name': 'disponible',
                            'id': 1
                        },
                        {
                            'name': 'no disponible',
                            'id': 2
                        }
                    ]
                }
            })
        else:
            return JsonResponse({
                'status': 500,
                'personList': [],
                'carList': [],
                'costcenterList': [],
                'miningList' : []
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

                if person_logged_id != person.id:
                    person_list.append(person.to_json())
        return person_list

    def _fetch_dashboard_car_data(self, person_type, cost_center):
        return [ car.to_json() for car in Car.objects.all() ] if person_type == PersonTypeEnum.ADMIN.value else [ car.to_json() for car in Car.objects.filter(cost_center=cost_center) ]

    def _fetch_cost_center_data(self, person_type, cost_center):
        return [ cost_center.to_json() for cost_center in CostCenter.objects.all() ] if person_type == PersonTypeEnum.ADMIN.value else []

    def _fetch_mining_data(self):
        mining_list = []
        for mining in Mining.objects.all():
            mining_list.append(mining.to_json())
        return mining_list

