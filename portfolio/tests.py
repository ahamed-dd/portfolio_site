from rest_framework.test import APITestCase
from django.urls import reverse
from portfolio.views import PortfolioViewSet, contact
from portfolio.models import site_profile
from rest_framework import status



# Create your tests here.
class TestTaskViews(APITestCase):
    def setUp(self):
        self.obj = site_profile.SiteProfile.objects.create(
            name = "Ahamed",
            email = "ahmedmb123@gmail.com",
            bio = "I am a backend developer.",
            about = "Developer"
        )
        self.url_list = reverse("portfolio-list")
        

    def test_get_obj(self):
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], self.obj.name)

    # def test_get_list_returns_correct_count(self):
    #     response = self.client.get(self.url_list)
    #     self.assertEqual(len(response.data), 1)

    # def test_get_list_returns_array(self):
    #     response = self.client.get(self.url_list)
    #     self.assertIsInstance(response.data, list)

    # def test_get_list_empty(self):
    #     site_profile.SiteProfile.objects.all().delete()

    #     response = self.client.get(self.url_list)

    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(response.data, [])



    
        
