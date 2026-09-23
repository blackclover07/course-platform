from django.urls import path
from home.views import HomePageView,AboutPageView,CategoriesPageView,CoursesPageView,LoginPageView,RegisterPageView,DashboardPageView,LogoutView,CourseDetailPageView

urlpatterns = [
    path('',HomePageView.as_view(),name='home' ),
    path('about/',AboutPageView.as_view(),name='about' ),
    path('categories/',CategoriesPageView.as_view(),name='categories' ),
    path('courses/',CoursesPageView.as_view(),name='courses' ),
    path('courses/<uuid:course_id>/',CourseDetailPageView.as_view(),name='course-detail' ),
    path('login/',LoginPageView.as_view(),name='login' ),
    path('register/',RegisterPageView.as_view(),name='register' ),
    path('logout/',LogoutView.as_view(),name='logout' ),
    path('dashboard/',DashboardPageView.as_view(),name='dashboard' ),
]



