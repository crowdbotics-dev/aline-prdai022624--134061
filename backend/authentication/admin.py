from django.contrib import admin
from .models import Customer, Driver, RestaurantPartner

admin.site.register(RestaurantPartner)
admin.site.register(Customer)
admin.site.register(Driver)

# Register your models here.
