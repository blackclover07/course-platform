from django.urls import path
from .views  import CoursesListCreateView,CourseDetailView,EnrollmentCreateView,EnrollmentStudentListView,EnrollmentInstructorListView,CategoryListCreateView,CoursesListview,GetCourseDetailView,CategoriesListView,GetFeaturedCourses

urlpatterns = [
    path('categories/',CategoryListCreateView.as_view(),name='category-list'),
    path('all-categories/',CategoriesListView.as_view(),name='all-categories'),
    path('courses/',CoursesListCreateView.as_view(),name='courses'),
    path('all-courses/',CoursesListview.as_view(),name='all-courses'),
    path('courses/featured/',GetFeaturedCourses.as_view(),name='featured-courses'),
    path('all-courses/<uuid:course_id>/',GetCourseDetailView.as_view(),name='all-courses-detail'),
    path('courses/<uuid:course_id>/',CourseDetailView.as_view(),name='courses-detail'),
    path('courses/<uuid:course_id>/enrollment/',EnrollmentCreateView.as_view(),name='courses-enrollment'),
    path('courses/enrollment/',EnrollmentStudentListView.as_view(),name='student-enrollments'),
    path('courses/instructor/enrollment/',EnrollmentInstructorListView.as_view(),name='get-enrollments'),
]
