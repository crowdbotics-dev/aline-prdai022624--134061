from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ChatSessionViewSet,
    ChatSessionViewSet,
    ChatSessionViewSet,
    ChatSessionViewSet,
)

router = DefaultRouter()
router.register("chatsession", ChatSessionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
