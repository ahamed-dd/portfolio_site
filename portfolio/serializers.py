from rest_framework import serializers
from .models import education, experience, projects, site_profile, skills, socials

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = education.Education
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = experience.Experience
        fields = '__all__'
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = projects.Projects
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = skills.Skills
        fields = '__all__'

class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = socials.Socials
        fields = '__all__'

class SiteSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)
    education = EducationSerializer(many=True, read_only=True)
    experience = ExperienceSerializer(many=True, read_only=True)
    skills = SkillSerializer(many=True, read_only=True)
    socials = SocialSerializer(many=True, read_only=True)
    class Meta:
        model = site_profile.SiteProfile
        fields = '__all__'