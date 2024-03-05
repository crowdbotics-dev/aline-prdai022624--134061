from django.conf import settings
from django.db import models


class Cancellation(models.Model):
    "Generated Model"
    order = models.ForeignKey(
        "orders.Order",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="cancellation_order",
    )
    reason = models.TextField()
    refund_issued = models.BooleanField()


# Create your models here.
