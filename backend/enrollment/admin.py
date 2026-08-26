from django.contrib import admin
from .models import Enrollment


# Register your models here.
@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("student", "course", "enrollment_date")
    list_filter = ["enrollment_date",]
    search_fields = ["student__email", "course__title"]
    ordering = ("-enrollment_date",)