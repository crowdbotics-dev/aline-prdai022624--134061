from django.conf import settings
from django.db import models


class Favorites(models.Model):
    "Generated Model"
    customer = models.ForeignKey(
        "authentication.Customer",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="favorites_customer",
    )
    restaurants = models.ManyToManyField(
        "restaurants.Restaurant",
        related_name="favorites_restaurants",
    )
    orders = models.ManyToManyField(
        "orders.Order",
        related_name="favorites_orders",
    )


# Create your models here.
