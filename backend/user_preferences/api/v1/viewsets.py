from rest_framework import authentication
from user_preferences.models import Favorites, Favorites, Favorites
from .serializers import FavoritesSerializer, FavoritesSerializer, FavoritesSerializer
from rest_framework import viewsets


class FavoritesViewSet(viewsets.ModelViewSet):
    serializer_class = FavoritesSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Favorites.objects.all()
