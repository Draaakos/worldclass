import json
from django.views import View
from django.http import JsonResponse
from api.models import Car, CarDocument, Document
from api.forms import DocumentForm
from ..tools import define_product_path

class CarDocumentView(View):
    def post(self, request, **kwargs):
        form = DocumentForm(request.POST, request.FILES)
        car_id = kwargs.get('car_id')

        if form.is_valid():
            file_data = self.handle_uploaded_file(request.FILES['upload'])

            car = Car.objects.get(pk=car_id)

            document = Document()
            document.name = file_data['filename']
            document.upload = file_data['path']
            document.save()

            car_document = CarDocument()
            car_document.document = document
            car_document.car = car
            car_document.save()

            return JsonResponse({
                'test': 'ok'
            })
        else:
            return JsonResponse({
                'msg': 'error'
            })




    def handle_uploaded_file(self, f):
        filename = define_product_path('', f.name)
        path = f'media/{filename}'
        with open(path, 'wb+') as destination:
            for chunk in f.chunks():
                destination.write(chunk)

        return {
            'path': path,
            'filename': filename
        }
