from typing import override

from django.shortcuts import render
from rest_framework import generics
from courses.serializers import CoursesSerializer
from courses.models import Course
from rest_framework.permissions import IsAuthenticated,SAFE_METHODS
from .permissions import IsInstructorOrReadOnly


# Create your views here.

class CoursesListCreateView(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset=Course.objects.all()
    serializer_class=CoursesSerializer



# here lookup_url_kwarg is the name of url arguments name

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[IsInstructorOrReadOnly]
    queryset=Course.objects.all()
    serializer_class=CoursesSerializer
    lookup_field='id'
    lookup_url_kwarg='course_id'
