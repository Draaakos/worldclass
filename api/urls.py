from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('car', views.car_data, name='card_data'),
    path('costcenter', views.cost_center, name='cost_center')
]