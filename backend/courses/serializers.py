from django.utils.text import slugify
from rest_framework import serializers

from .models import Course, Section, Lesson


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = ["id", "title","description","content","order",]


class SectionSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Section
        fields = ["id","title","description","order","lessons",]


class CoursesSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField()

    sections = SectionSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Course
        fields = ["id","title","description","price","image","slug","sections"]
    def get_slug(self, obj):
        return slugify(obj.title)
