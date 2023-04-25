import json
import datetime
from api.models import CostCenter, Worker



def run():
    print('leyendo workers...')
    process_file()


def process_date(date):
    try:
        s = date.split('/')
        y = int(s[2])
        m = int(s[0])
        d = int(s[1])

        return datetime.date(y, m, d)
    except:
        return None


def process_file():
    with open('datos.json', 'r', encoding='utf-8') as file:
        data = json.load(file)


    for row in data:
        worker = Worker()
        worker.cost_center = CostCenter.objects.get(name__icontains=row['cost_center'])
        worker.sex = row['sex']
        worker.working_day = row['working_day']
        worker.rut = row['rut']
        worker.firstname = row['firstname']
        worker.lastname = row['lastname']
        worker.job = row['job']
        worker.contract = row['contract']
        worker.start_contract = process_date(row['start_contract'])
        worker.end_contract = process_date(row['end_contract'])
        worker.birthdate = process_date(row['birthdate'])
        worker.nationality = row['nationality']
        worker.email = row['email']
        worker.phone = row['phone']
        worker.address = row['address']
        worker.city = row['city']
        worker.save()
