from django.forms import ModelForm
from .models import Document

class DocumentForm(ModelForm):
    class Meta:
        model = Document
        fields = ['name', 'upload', 'expired_date']
        # name = forms.CharField(max_length=50)
        # upload = forms.FileField()
