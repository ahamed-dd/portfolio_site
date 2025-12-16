from django.contrib import admin

# import the model 
from .models import SiteModel

class UserAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "linkedin",
        "github",
        "medium",
        "bio",
        "about",
        "experience",
        "bio",
        "skills",
        "programming",
        "communication",
        "tools",
        "projects",
        "education"
    )

admin.site.register(SiteModel,UserAdmin)