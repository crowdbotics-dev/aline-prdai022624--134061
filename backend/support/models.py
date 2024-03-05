from django.conf import settings
from django.db import models


class ChatSession(models.Model):
    "Generated Model"
    customer = models.ForeignKey(
        "authentication.Customer",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="chatsession_customer",
    )
    driver = models.ForeignKey(
        "authentication.Driver",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="chatsession_driver",
    )
    messages = models.JSONField()


# Create your models here.
