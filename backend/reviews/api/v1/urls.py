from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    RestaurantReviewViewSet,
    DriverReviewViewSet,
    DriverReviewViewSet,
    RestaurantReviewViewSet,
    DriverReviewViewSet,
    RestaurantReviewViewSet,
    DriverReviewViewSet,
    RestaurantReviewViewSet,
)

router = DefaultRouter()
router.register("restaurantreview", RestaurantReviewViewSet)
router.register("driverreview", DriverReviewViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
