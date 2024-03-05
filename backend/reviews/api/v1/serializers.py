from rest_framework import serializers
from reviews.models import (
    RestaurantReview,
    DriverReview,
    DriverReview,
    RestaurantReview,
)


class RestaurantReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = "__all__"


class DriverReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriverReview
        fields = "__all__"
