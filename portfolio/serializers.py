from rest_framework import serializers
from .models import SiteModel

class Site_Serializer(serializers.ModelSerializer):
    class Meta:
        model = SiteModel
        fields = '__all__'