import json
from django.views import View
from django.http import JsonResponse
from api.models import Document

class DocumentView(View):
    def get(self, request):
        return JsonResponse({
            "response": [  document.to_json() for document in Document.objects.all()  ]
        })