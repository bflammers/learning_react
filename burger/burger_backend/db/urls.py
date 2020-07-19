from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import OrderViewSet, ClientViewSet

router = routers.DefaultRouter()
router.register('orders', OrderViewSet)
router.register('clients', ClientViewSet)


urlpatterns = [
    path('', include(router.urls))
]