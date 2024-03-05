from rest_framework import authentication
from reviews.models import (
    RestaurantReview,
    DriverReview,
    DriverReview,
    RestaurantReview,
    DriverReview,
    RestaurantReview,
)
from .serializers import (
    RestaurantReviewSerializer,
    DriverReviewSerializer,
    DriverReviewSerializer,
    RestaurantReviewSerializer,
    DriverReviewSerializer,
    RestaurantReviewSerializer,
)
from rest_framework import viewsets


class RestaurantReviewViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantReviewSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = RestaurantReview.objects.all()


class DriverReviewViewSet(viewsets.ModelViewSet):
    serializer_class = DriverReviewSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = DriverReview.objects.all()
