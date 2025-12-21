from django.db import models
from .site_profile import SiteProfile

class Socials(models.Model):
    site = models.ForeignKey(
        SiteProfile,
        on_delete=models.CASCADE,
        related_name='socials'
    )
    name = models.CharField(blank=True, null=True)
    url = models.URLField(blank=True, null=True)
    icon_url = models.CharField(blank=True, null=True)