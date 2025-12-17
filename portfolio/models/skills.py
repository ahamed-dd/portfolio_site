from django.db import models
from .site_profile import SiteProfile


class Skills(models.Model):
    site = models.ForeignKey(
        SiteProfile,
        on_delete=models.CASCADE,
        related_name="skills"
    )
    CHOICES = [
        ('Programming', "programming"),
        ('AI, ML and NLP', 'Ai, Ml and Nlp'),
        ('Data Engineering and Visualization', 'data engineering and visualization'),
        ('SDLC, Cloud and Devops', 'sdlc cloud and devops')
        ]
    
    name = models.CharField(max_length=100)
    image_url = models.CharField(max_length=500)
    category = models.CharField(max_length=100, choices=CHOICES)