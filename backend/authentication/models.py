from django.conf import settings
from django.db import models


class RestaurantPartner(models.Model):
    "Generated Model"
    email = models.EmailField(
        unique=True,
    )
    password = models.CharField(
        max_length=100,
    )
    is_active = models.BooleanField()


class Customer(models.Model):
    "Generated Model"
    email = models.EmailField(
        unique=True,
    )
    password = models.CharField(
        max_length=100,
    )
    is_active = models.BooleanField()


class Driver(models.Model):
    "Generated Model"
    email = models.EmailField(
        unique=True,
    )
    password = models.CharField(
        max_length=100,
    )
    is_active = models.BooleanField()


# Create your models here.
