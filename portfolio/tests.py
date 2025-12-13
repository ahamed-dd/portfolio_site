from rest_framework.test import APITestCase
from django.urls import reverse
from portfolio.views import PortfolioViewSet, contact
from portfolio.models import SiteModel
from rest_framework import status


# Create your tests here.
class TestTaskViews(APITestCase):
    def setUp(self):
        self.obj = SiteModel.objects.create(
            name = "Ahamed",
            email = "ahmedmb123@gmail.com",
            bio = "I am a backend developer.",
            about = "Developer"
        )
        self.url_list = reverse("portfolio-list")
        self.url_detail = reverse("portfolio-detail", kwargs={'pk': self.obj.pk})

    def test_get_obj(self):
        response = self.client.get(self.url_list)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['name'], self.obj.name)

    def test_post_obj(self):
        data = {
            "name": "Jassim",
            "email": "jassim123@gmail.com",
            "about": "Designer"
        }
        response = self.client.post(self.url_list, data, format='json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_update_obj(self):
        data = {
            "name": "Jassim",
            "email": "jassim123@gmail.com",
            "about": "Engineer"
        }
        response = self.client.put(self.url_detail, data, format='json')
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['about'], data['about'])

    def test_delete_obj(self):
        response = self.client.delete(self.url_detail)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        
