from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CancellationViewSet,
    CancellationViewSet,
    CancellationViewSet,
    CancellationViewSet,
)

router = DefaultRouter()
router.register("cancellation", CancellationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
