from rest_framework import authentication
from geolocation.models import Address, Address, Address
from .serializers import AddressSerializer, AddressSerializer, AddressSerializer
from rest_framework import viewsets


class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Address.objects.all()
