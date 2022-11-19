from api.models import CarType

def car_type_data():
    return [ car_type.to_json() for car_type in CarType.objects.all() ]
