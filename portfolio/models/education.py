from django.db import models
from .site_profile import SiteProfile


class Education(models.Model):
    site = models.ForeignKey(
        SiteProfile,
        on_delete=models.CASCADE,
        related_name="education"
    )
    institute_name = models.CharField(max_length=100)
    degree = models.CharField(null=True, blank=True)
    field = models.CharField(blank=True, null=True)
    year_started = models.IntegerField(blank=True, null=True)
    year_ended = models.IntegerField(blank=True, null=True)
    grade = models.IntegerField(blank=True, null=True)
    located = models.CharField(blank=True)

    def __str__(self):
        return self.institute_name