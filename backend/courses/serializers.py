from django.utils.text import slugify
from rest_framework import serializers
from rest_framework.permissions import AllowAny

from .models import Category
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


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id","name","slug","description","is_active"]
        read_only_fields = ["id","slug"]



# for frontened specific details of courses
class AllCoursesSerializer(serializers.ModelSerializer):
    slug = serializers.SerializerMethodField()
    class Meta:
        model = Course
        fields = ["id","title","description","price","image","slug","is_featured"]
    def get_slug(self, obj):
        return slugify(obj.title)

