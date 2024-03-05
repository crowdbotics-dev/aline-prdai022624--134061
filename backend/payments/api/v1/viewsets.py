from rest_framework import authentication
from payments.models import Payment, Payment, Payment
from .serializers import PaymentSerializer, PaymentSerializer, PaymentSerializer
from rest_framework import viewsets


class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Payment.objects.all()
