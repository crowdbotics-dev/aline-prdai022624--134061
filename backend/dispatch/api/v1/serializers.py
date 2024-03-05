from rest_framework import serializers
from dispatch.models import Dispatch, Dispatch


class DispatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dispatch
        fields = "__all__"
