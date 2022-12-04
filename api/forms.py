from django import forms
from .models import Document

class DocumentForm(forms.Form):
    name = forms.CharField(max_length=50)
    upload = forms.FileField()
