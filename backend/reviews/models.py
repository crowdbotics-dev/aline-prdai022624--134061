from django.conf import settings
from django.db import models


class RestaurantReview(models.Model):
    "Generated Model"
    restaurant = models.ForeignKey(
        "restaurants.Restaurant",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="restaurantreview_restaurant",
    )
    customer = models.ForeignKey(
        "authentication.Customer",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="restaurantreview_customer",
    )
    rating = models.IntegerField()
    comment = models.TextField(
        null=True,
        blank=True,
    )


class DriverReview(models.Model):
    "Generated Model"
    driver = models.ForeignKey(
        "authentication.Driver",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="driverreview_driver",
    )
    customer = models.ForeignKey(
        "authentication.Customer",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="driverreview_customer",
    )
    rating = models.IntegerField()
    comment = models.TextField(
        null=True,
        blank=True,
    )


# Create your models here.
