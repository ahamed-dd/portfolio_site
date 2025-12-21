from django.db import models
from .site_profile import SiteProfile

class Projects(models.Model):

    site = models.ForeignKey(
        SiteProfile,
        on_delete=models.CASCADE,
        related_name="projects"
    )
    title = models.CharField(max_length=100)
    description = models.TextField()
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    tech_stack = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    proj_image_url = models.URLField(null=True, blank=True)