from django.conf import settings
from django.db import models


class Promotion(models.Model):
    "Generated Model"
    code = models.CharField(
        max_length=50,
    )
    description = models.TextField()
    discount = models.DecimalField(
        max_digits=5,
        decimal_places=2,
    )
    active = models.BooleanField()


# Create your models here.
