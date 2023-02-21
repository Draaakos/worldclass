from api.models import CostCenter
from ..enum import PersonTypeEnum

def cost_center_data(person_type_logged, person_cost_center_id_logged):
    return [ cost_center.to_json() for cost_center in CostCenter.objects.all() ]
