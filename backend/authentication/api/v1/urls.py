from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    RestaurantPartnerViewSet,
    CustomerViewSet,
    DriverViewSet,
    CustomerViewSet,
    DriverViewSet,
    RestaurantPartnerViewSet,
    CustomerViewSet,
    DriverViewSet,
    RestaurantPartnerViewSet,
    CustomerViewSet,
    DriverViewSet,
    RestaurantPartnerViewSet,
)

router = DefaultRouter()
router.register("restaurantpartner", RestaurantPartnerViewSet)
router.register("customer", CustomerViewSet)
router.register("driver", DriverViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
