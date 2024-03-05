from rest_framework import serializers
from authentication.models import (
    RestaurantPartner,
    Customer,
    Driver,
    Customer,
    Driver,
    RestaurantPartner,
)


class RestaurantPartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantPartner
        fields = "__all__"


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = "__all__"
