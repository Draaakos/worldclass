from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from api.models import Worker
from ..forms import WorkerForm

class WorkerView(View):
    def get(self, request):
        workers = list(Worker.objects.all().values())
        return JsonResponse({'workers': workers})

    def post(self, request):
        form = WorkerForm(request.POST)
        if form.is_valid():
            worker = form.save()
            return JsonResponse({'worker_id': worker.id})
        else:
            return JsonResponse({'errors': form.errors}, status=400)

    def put(self, request, worker_id):
        worker = get_object_or_404(Worker, id=worker_id)
        form = WorkerForm(request.POST, instance=worker)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Trabajador actualizado exitosamente'})
        else:
            return JsonResponse({'errors': form.errors}, status=400)

    def delete(self, request, worker_id):
        worker = get_object_or_404(Worker, id=worker_id)
        worker.delete()
        return JsonResponse({'message': 'Trabajador eliminado exitosamente'})
