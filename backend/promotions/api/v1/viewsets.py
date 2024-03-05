from rest_framework import authentication
from promotions.models import Promotion, Promotion, Promotion
from .serializers import PromotionSerializer, PromotionSerializer, PromotionSerializer
from rest_framework import viewsets


class PromotionViewSet(viewsets.ModelViewSet):
    serializer_class = PromotionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Promotion.objects.all()
