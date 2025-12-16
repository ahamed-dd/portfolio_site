
from .views import PortfolioViewSet, contact
from django.urls import path



urlpatterns = [path('contact', contact, name="contactus"),
               path('', PortfolioViewSet, name="portfolio-list")]

