from django.http import JsonResponse
from django.views import View
from api.models import Worker

class RHDashboard(View):
    def get(self, request):
        return JsonResponse({
            'workers': self._fetch_workers()
        })

    def _fetch_workers(self):
        worker_list = []

        for worker in Worker.objects.all():
            worker_list.append(worker.to_json())
        return worker_list



