from rest_framework import authentication
from notifications.models import Notification, Notification, Notification
from .serializers import (
    NotificationSerializer,
    NotificationSerializer,
    NotificationSerializer,
)
from rest_framework import viewsets


class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Notification.objects.all()
