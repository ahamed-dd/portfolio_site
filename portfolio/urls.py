from rest_framework.routers import DefaultRouter
from .views import PortfolioViewSet, contact
from django.urls import path

router = DefaultRouter()
router.register(r'', PortfolioViewSet, basename='portfolio')

urlpatterns = [path('contact', contact, name="contactus")]

urlpatterns += router.urls