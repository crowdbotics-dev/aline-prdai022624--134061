from rest_framework import authentication
from dispatch.models import Dispatch, Dispatch, Dispatch
from .serializers import DispatchSerializer, DispatchSerializer, DispatchSerializer
from rest_framework import viewsets


class DispatchViewSet(viewsets.ModelViewSet):
    serializer_class = DispatchSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Dispatch.objects.all()
