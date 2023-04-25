from django.forms import ModelForm
from .models import Document, Worker


class DocumentForm(ModelForm):
    class Meta:
        model = Document
        fields = ['document_type', 'upload', 'expired_date', 'has_expired']


class WorkerForm(ModelForm):
    class Meta:
        model = Worker
        fields = ['firstname', 'lastname', 'email', 'phone']
