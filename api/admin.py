from django.contrib import admin
from api.models import Document


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    ordering = ['id',]
    list_display = ['id', 'upload']
    list_editable = ['upload']


