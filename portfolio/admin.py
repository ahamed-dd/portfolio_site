from django.contrib import admin
from .models import education,experience, projects, site_profile

class ProjectInline(admin.TabularInline):
    model = projects.Projects
    extra = 1
    ordering = ("order",)

class ExperienceInline(admin.TabularInline):
    model = experience.Experience
    extra = 1

class EducationInline(admin.TabularInline):
    model = education.Education
    extra = 1

@admin.register(site_profile.SiteProfile)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "linkedin",
        "github",
        "medium",
        "bio",
        "about"
    )
    inlines = [ProjectInline, EducationInline, ExperienceInline]

