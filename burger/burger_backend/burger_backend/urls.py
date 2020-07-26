from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework_expiring_authtoken.views import obtain_expiring_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('db/', include('db.urls')),
    path('auth/', obtain_expiring_auth_token)
]