from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    PromotionViewSet,
    PromotionViewSet,
    PromotionViewSet,
    PromotionViewSet,
)

router = DefaultRouter()
router.register("promotion", PromotionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
