from rest_framework import authentication
from orders.models import Order, Order, Order
from .serializers import OrderSerializer, OrderSerializer, OrderSerializer
from rest_framework import viewsets


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Order.objects.all()
