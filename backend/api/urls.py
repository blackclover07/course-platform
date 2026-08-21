from django.urls import path,include
from .views  import CoursesListCreateView,CourseDetailView


urlpatterns = [
    path('courses/',CoursesListCreateView.as_view(),name='courses'),
    path('courses/<uuid:course_id>/',CourseDetailView.as_view(),name='courses-detail'),
]
