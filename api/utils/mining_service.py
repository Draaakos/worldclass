from api.models import Mining
from ..enum import PersonTypeEnum

def mining_service_data(person_type_logged, person_mining_service_id_logged):
    if PersonTypeEnum.ADMIN.value == person_type_logged:
        return [ mining_service.to_json() for mining_service in Mining.objects.all() ]
    else:
        return [ Mining.objects.get(pk=person_mining_service_id_logged).to_json() ]
    return []