from django.urls import path
from . import views

urlpatterns = [
    path('messages/', views.list_messages, name='list_messages'),
    path('messages/create/', views.create_message, name='create_message'),
]