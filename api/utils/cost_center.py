from api.models import CostCenter

def cost_center_data():
    return [ cost_center.to_json() for cost_center in CostCenter.objects.all() ]
