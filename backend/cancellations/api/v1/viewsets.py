from rest_framework import authentication
from cancellations.models import Cancellation, Cancellation, Cancellation
from .serializers import (
    CancellationSerializer,
    CancellationSerializer,
    CancellationSerializer,
)
from rest_framework import viewsets


class CancellationViewSet(viewsets.ModelViewSet):
    serializer_class = CancellationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Cancellation.objects.all()
