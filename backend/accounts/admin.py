from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model=User
    list_display = (
            "email",
            "first_name",
            "last_name",
            "role",
            "is_email_verified",
            "is_staff",
            "is_active",
        )

    list_filter = (
            "role",
            "is_staff",
            "is_active",
        )

    search_fields = (
            "email",
            "first_name",
            "last_name",
        )

    ordering = ("email",)

    fieldsets = (
            (None, {"fields": ("email", "password")}),
            (
                "Personal info",
                {
                    "fields": (
                        "first_name",
                        "last_name",
                    )
                },
            ),
            (
                "Role",
                {
                    "fields": (
                        "role",
                    )
                },
            ),
            (
                "Permissions",
                {
                    "fields": (
                        "is_email_verified",
                        "is_active",
                        "is_staff",
                        "is_superuser",
                        "groups",
                        "user_permissions",
                    )
                },
            ),
            (
                "Important dates",
                {
                    "fields": (
                        "last_login",
                        "date_joined",
                    )
                },
            ),
        )

    add_fieldsets = (
            (
                None,
                {
                    "classes": ("wide",),
                    "fields": (
                        "email",
                        "password1",
                        "password2",
                        "first_name",
                        "last_name",
                        "role",
                        "is_email_verified",
                        "is_active",
                        "is_staff",
                    ),
                },
            ),
        )
    readonly_fields = (
        "last_login",
        "date_joined",
    )