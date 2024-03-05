from rest_framework import authentication
from support.models import ChatSession, ChatSession, ChatSession
from .serializers import (
    ChatSessionSerializer,
    ChatSessionSerializer,
    ChatSessionSerializer,
)
from rest_framework import viewsets


class ChatSessionViewSet(viewsets.ModelViewSet):
    serializer_class = ChatSessionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ChatSession.objects.all()
