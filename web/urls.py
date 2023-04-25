from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('dashboard/costcenter', views.costcenter, name='costcenter'),
    path('dashboard/user', views.user, name='user'),
    path('dashboard/mining', views.mining, name='mining'),
    path('dashboard/rh', views.dashboard_rh, name='dashboard_rh'),
]
