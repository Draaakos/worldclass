from django.contrib import admin
from api.models import Document
from api.models import CarDocument


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    ordering = ['id',]
    list_display = ['id', 'document_type', 'upload']
    list_editable = ['document_type', 'upload']


@admin.register(CarDocument)
class CarDocumentAdmin(admin.ModelAdmin):
    ordering = ['id',]
    list_display = ['id', 'car', 'document']
    list_editable = ['car', 'document']

