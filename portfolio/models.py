from django.db import models

class SiteModel(models.Model):
    # contact details
    name = models.CharField(max_length=100)
    email = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    github = models.URLField(null=True, blank=True)
    medium = models.URLField(null=True, blank=True)

    #Bio
    bio = models.TextField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)

    #Experience
    experience = models.TextField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    #Skills
    skills = models.TextField(blank=True, null=True)

    #Knowledge
    programming = models.TextField(blank=True, null=True)
    communication = models.TextField(blank=True, null=True)
    tools = models.TextField(blank=True, null=True)

    #Projects
    projects = models.TextField(blank=True, null=True)

    education = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
