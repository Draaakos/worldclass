import json
from django.views import View
from django.http import JsonResponse
from api.models import Car, CarDocument, Document
from api.forms import DocumentForm
from ..tools import define_product_path

class CarDocumentView(View):
    def post(self, request, **kwargs):
        car_id = kwargs.get('car_id')
        form = DocumentForm(request.POST, request.FILES)

        if form.is_valid():
            document = form.save()
            car = Car.objects.get(pk=car_id)
            car_document = CarDocument()
            car_document.document = document
            car_document.car = car
            car_document.save()

            return JsonResponse({
                'data': document.to_json()
            })
        else:
            return JsonResponse({
                'msg': 'error'
            })

    def delete(self, request, **kwargs):
        return JsonResponse({
            'msg': 'borrando'
        })
