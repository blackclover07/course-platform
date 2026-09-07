from django.shortcuts import render
from django.views.generic import TemplateView
from courses.models import Category, Course
from django.db.models import Count


# Create your views here.

class HomePageView(TemplateView):
    template_name = 'index.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'

class CategoriesPageView(TemplateView):
    template_name = 'categories.html'

    def get_context_data(self, **kwargs):
        context = super(CategoriesPageView, self).get_context_data(**kwargs)
        context['categories'] = Category.objects.all()
        return context


class CoursesPageView(TemplateView):

    template_name = "courses.html"

    def get_context_data(self, **kwargs):

        context = super().get_context_data(**kwargs)

        context["courses"] = (
            Course.objects
            .select_related("category")
            .annotate(
                lesson_count=Count("sections__lessons")
            )
        )

        return context



class LoginPageView(TemplateView):
    template_name = 'login.html'


class RegisterPageView(TemplateView):
    template_name = 'register.html'
