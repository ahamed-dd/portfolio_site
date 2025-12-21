from .models import site_profile
from .serializers import SiteSerializer
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
# Create your views here.

@api_view(['GET'])
def PortfolioViewSet(request):
    site = site_profile.SiteProfile.objects.prefetch_related(
            "projects",
            "education",
            "experience",
            "skills",
            "socials"
        ).first()
    serializer = SiteSerializer(site)
    return Response(serializer.data)


@api_view(['POST'])
def contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if name and email and message:
        try:
            send_mail(
                'New Contact Form Submission',
                f"Name: {name}\nEmail: {email}\nMessage: {message}",
                f'{email}',
                ['ahmedmb123@gmail.com'],
                fail_silently=False,
            )
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return Response({'error': 'Please fill the fields correctly'}, status=status.HTTP_400_BAD_REQUEST)
