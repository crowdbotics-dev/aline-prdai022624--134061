from rest_framework import authentication
from restaurants.models import Restaurant, Restaurant, Restaurant
from .serializers import (
    RestaurantSerializer,
    RestaurantSerializer,
    RestaurantSerializer,
)
from rest_framework import viewsets


class RestaurantViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Restaurant.objects.all()
