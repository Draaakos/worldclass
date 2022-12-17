from api.models import DocumentType

def document_type_data():
    return [ document_type.to_json() for document_type in DocumentType.objects.all() ]
