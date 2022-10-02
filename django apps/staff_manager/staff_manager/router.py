from api.viewsets import StaffViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('staff',StaffViewset)

# localhost:p/api/staff/5
# GET, POST, PUT, DELETE
# list , retrieve