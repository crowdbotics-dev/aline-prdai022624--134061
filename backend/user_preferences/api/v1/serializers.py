from rest_framework import serializers
from user_preferences.models import Favorites, Favorites


class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = "__all__"
