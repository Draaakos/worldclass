from django.contrib import admin
from api.models import Document
from api.models import DocumentType
from api.models import CarDocument

@admin.register(DocumentType)
class DocumentTypeAdmin(admin.ModelAdmin):
    ordering = ['id',]
    list_display = ['id', 'name']
    list_editable = ['name']


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    ordering = ['id',]
    list_display = ['id', 'document_type', 'upload', 'has_expired']
    list_editable = ['document_type', 'upload', 'has_expired']


@admin.register(CarDocument)
class CarDocumentAdmin(admin.ModelAdmin):
    ordering = ['id',]
    list_display = ['id', 'car', 'document']
    list_editable = ['car', 'document']

