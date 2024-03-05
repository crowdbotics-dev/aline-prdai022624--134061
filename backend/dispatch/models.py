from django.conf import settings
from django.db import models


class Dispatch(models.Model):
    "Generated Model"
    order = models.ForeignKey(
        "orders.Order",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="dispatch_order",
    )
    driver = models.ForeignKey(
        "authentication.Driver",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="dispatch_driver",
    )


# Create your models here.
