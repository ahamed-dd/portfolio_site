from django.db import models

class SiteProfile(models.Model):
    # contact details
    name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    github = models.URLField(null=True, blank=True)
    medium = models.URLField(null=True, blank=True)

    #Bio
    bio = models.TextField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    extra_info = models.TextField(blank=True, null=True)
    resume_url = models.CharField(null=True, blank=True)
