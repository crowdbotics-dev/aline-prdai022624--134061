from django.conf import settings
from django.db import models


class Notification(models.Model):
    "Generated Model"
    customer = models.ForeignKey(
        "authentication.Customer",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="notification_customer",
    )
    message = models.TextField()
    type = models.CharField(
        max_length=50,
    )
    read = models.BooleanField()


# Create your models here.
