from django.shortcuts import redirect
from django.views.generic import TemplateView, View, DetailView
from prompt_toolkit.shortcuts import confirm

from accounts.models import User
from courses.models import Category, Course
from django.db.models import Count
from django.contrib import messages
from django.contrib.auth import login, authenticate, logout

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

    def post(self, request, *args, **kwargs):
        email =request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)

        if user is None:
            messages.error(request, 'Email or password is incorrect')
            return self.get(request, *args, **kwargs)

        login(request, user)
        messages.success(request, 'You have been logged in successfully.')
        return redirect('dashboard')

class RegisterPageView(TemplateView):
    template_name = 'register.html'

    def post(self, request, *args, **kwargs):
        first_name = request.POST.get('first_name').strip()
        last_name = request.POST.get('last_name').strip()
        email = request.POST.get('email').strip()
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        terms = request.POST.get('terms')


        if not all([first_name, last_name, email, password, confirm_password]):
            messages.error(request, 'Please fill all fields')
            return self.get(request, *args, **kwargs)

        if not terms:
            messages.error(request, 'You must agree to the terms and conditions')
            return self.get(request, *args, **kwargs)

        if password != confirm_password:
            messages.error(request, 'Passwords do not match')
            return self.get(request, *args, **kwargs)

        if User.objects.filter(email=email).exists():
            messages.error(request, 'Email already exists')
            return self.get(request, *args, **kwargs)

        user = User.objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name)

        messages.success(request, 'You have been registered successfully.')

        login(request, user)
        return redirect('dashboard')

class DashboardPageView(TemplateView):
    template_name = 'student-dashboard.html'


class LogoutView(View):
    def post(self, request, *args, **kwargs):
        logout(request)
        messages.success(request, 'You have been logged out.')
        return redirect('login')



class CourseDetailPageView(DetailView):
    model = Course
    template_name = 'course/course-detail.html'
    pk_url_kwarg = 'course_id'
    context_object_name = 'course'

    def get_queryset(self):
        return (
            Course.objects
            .select_related("category")
            .prefetch_related("sections__lessons")
            .annotate(
                lesson_count=Count("sections__lessons")
            )
        )



