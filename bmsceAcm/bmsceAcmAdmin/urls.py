from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', admin_login, name="admin_login"),
    path('admindashboard/', admin_dashboard, name="admin_dashboard"),
    path('accounts/logout/', logout_view, name='logout'),
    path('eventsadmin/', getEvents, name="eventsadmin"),
]
