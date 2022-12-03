from api.models import PersonType

def user_type_data():
    return [ user.to_json() for user in PersonType.objects.all() ]
