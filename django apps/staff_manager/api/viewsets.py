from rest_framework import viewsets
from . import models
from . import serializers

class StaffViewset(viewsets.ModelViewSet):
    queryset = models.Staff.objects.all()
    serializer_class = serializers.StaffSerializer