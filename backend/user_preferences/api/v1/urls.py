from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    FavoritesViewSet,
    FavoritesViewSet,
    FavoritesViewSet,
    FavoritesViewSet,
)

router = DefaultRouter()
router.register("favorites", FavoritesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
