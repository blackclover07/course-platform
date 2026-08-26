from django.urls import path
from .views  import CoursesListCreateView,CourseDetailView,EnrollmentCreateView,EnrollmentStudentListView,EnrollmentInstructorListView

urlpatterns = [
    path('courses/',CoursesListCreateView.as_view(),name='courses'),
    path('courses/<uuid:course_id>/',CourseDetailView.as_view(),name='courses-detail'),
    path('courses/<uuid:course_id>/enrollment/',EnrollmentCreateView.as_view(),name='courses-enrollment'),
    path('courses/enrollment/',EnrollmentStudentListView.as_view(),name='student-enrollments'),
    path('courses/instructor/enrollment/',EnrollmentInstructorListView.as_view(),name='get-enrollments'),
]
