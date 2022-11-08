import json
from django.views import View
from django.http import JsonResponse
# from .forms import UserForm
from api.models import CostCenter

class CostCenterView(View):
    def get(self, request, **kwargs):
        return JsonResponse({
            "data": [cost_center.to_json() for cost_center in CostCenter.objects.all()]
        })
