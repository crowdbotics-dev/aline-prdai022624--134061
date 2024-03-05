from rest_framework import serializers
from geolocation.models import Address, Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"
