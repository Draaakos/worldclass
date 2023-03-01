from api.models import DocumentType
from datetime import datetime, timedelta

def document_type_data():
    return [ document_type.to_json() for document_type in DocumentType.objects.all() ]

