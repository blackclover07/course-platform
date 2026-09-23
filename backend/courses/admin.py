from django.contrib import admin

from .models import Course, Lesson, Section,Category

# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name","slug","description","is_active"]

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "image", "price", "created_at", "updated_at")
    search_fields = ["title"]
    list_filter = ["created_at", "updated_at"]
    ordering = ("-created_at",)


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "order", "course")
    search_fields = ["title", "course__title"]
    list_filter = ["course"]


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "order", "section")
    search_fields = ["title", "section__course__title"]
    list_filter = ["section__course"]