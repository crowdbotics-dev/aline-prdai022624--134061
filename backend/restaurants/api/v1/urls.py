from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    RestaurantViewSet,
    RestaurantViewSet,
    RestaurantViewSet,
    RestaurantViewSet,
)

router = DefaultRouter()
router.register("restaurant", RestaurantViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
