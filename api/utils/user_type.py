from api.models import PersonType
from ..enum_1 import PersonTypeEnum

def user_type_data(person_type_logged):
    if PersonTypeEnum.ADMIN.value == person_type_logged:
        return [ user.to_json() for user in PersonType.objects.filter(pk__gte=2) ]
    else:
        return [ user.to_json() for user in PersonType.objects.filter(pk__gte=3) ]
