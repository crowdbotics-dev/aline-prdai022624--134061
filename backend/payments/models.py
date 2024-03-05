from django.conf import settings
from django.db import models


class Payment(models.Model):
    "Generated Model"
    order = models.ForeignKey(
        "orders.Order",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="payment_order",
    )
    method = models.CharField(
        max_length=50,
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    status = models.CharField(
        max_length=50,
    )


# Create your models here.
