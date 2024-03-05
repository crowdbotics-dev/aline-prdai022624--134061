from django.conf import settings
from django.db import models


class Address(models.Model):
    "Generated Model"
    customer = models.ForeignKey(
        "authentication.Customer",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="address_customer",
    )
    latitude = models.FloatField()
    longitude = models.FloatField()
    address = models.CharField(
        max_length=255,
    )


# Create your models here.
