from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PaymentViewSet, PaymentViewSet, PaymentViewSet, PaymentViewSet

router = DefaultRouter()
router.register("payment", PaymentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
