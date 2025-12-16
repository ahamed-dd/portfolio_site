from django.db import models
from .site_profile import SiteProfile


class Experience(models.Model):
    site = models.ForeignKey(
        SiteProfile,
        on_delete=models.CASCADE,
        related_name="experience"
    )
    company_name = models.CharField(max_length=100)
    role = models.CharField(null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    year_worked = models.IntegerField(blank=True, null=True)
    located = models.CharField(blank=True)

    def __str__(self):
        return self.company_name