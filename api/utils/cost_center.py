from api.models import CostCenter
from ..enum import PersonTypeEnum

def cost_center_data(person_type_logged, person_cost_center_id_logged):
    if PersonTypeEnum.ADMIN.value == person_type_logged:
        return [ cost_center.to_json() for cost_center in CostCenter.objects.all() ]
    else:
        return [ CostCenter.objects.get(pk=person_cost_center_id_logged).to_json() ]
    return []
