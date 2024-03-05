from rest_framework import authentication
from authentication.models import (
    RestaurantPartner,
    Customer,
    Driver,
    Customer,
    Driver,
    RestaurantPartner,
    Customer,
    Driver,
    RestaurantPartner,
)
from .serializers import (
    RestaurantPartnerSerializer,
    CustomerSerializer,
    DriverSerializer,
    CustomerSerializer,
    DriverSerializer,
    RestaurantPartnerSerializer,
    CustomerSerializer,
    DriverSerializer,
    RestaurantPartnerSerializer,
)
from rest_framework import viewsets


class RestaurantPartnerViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantPartnerSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = RestaurantPartner.objects.all()


class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Customer.objects.all()


class DriverViewSet(viewsets.ModelViewSet):
    serializer_class = DriverSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Driver.objects.all()
