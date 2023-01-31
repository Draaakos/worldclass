from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('register', views.register, name='register'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('car', views.car_data, name='card_data'),
    path('car/<int:id>', views.car_data, name='card_data'),
    path('car/type', views.car_type, name='car_type'),
    path('car/type/<int:id>', views.car_type, name='car_type'),
    path('car/<int:car_id>/document', views.car_document, name='car_document'),
    path('car/<int:car_id>/document/<int:document_id>', views.car_document, name='deleted_document'),
    path('costcenter', views.cost_center, name='cost_center'),
    path('costcenter/<int:id>', views.cost_center, name='cost_center'),
    path('person', views.person_data, name='person_data'),
    path('person/<int:id>', views.person_data, name='person_data'),
    path('person/type', views.person_type, name='person_type'),
    path('person/type/<int:id>', views.person_type, name='person_type'),
    path('mining', views.mining, name='mining'),
    path('mining/<int:id>', views.mining, name='mining'),
]
