from rest_framework import serializers
from cancellations.models import Cancellation, Cancellation


class CancellationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancellation
        fields = "__all__"
