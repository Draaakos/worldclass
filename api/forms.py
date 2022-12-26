from django.forms import ModelForm
from .models import Document

class DocumentForm(ModelForm):
    class Meta:
        model = Document
        fields = ['document_type', 'upload', 'expired_date', 'has_expired']
