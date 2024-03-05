from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DispatchViewSet, DispatchViewSet, DispatchViewSet, DispatchViewSet

router = DefaultRouter()
router.register("dispatch", DispatchViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
