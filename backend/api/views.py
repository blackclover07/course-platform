from rest_framework import generics
from courses.serializers import CoursesSerializer
from courses.models import Course
from enrollment.models import Enrollment
from enrollment.serializers import EnrollmentSerializer
from .permissions import IsInstructorOrReadOnly,IsInstructorOrAuthenticatedReadOnly,IsStudent,IsInstructor
from django.shortcuts import get_object_or_404

# Create your views here.

class CoursesListCreateView(generics.ListCreateAPIView):
    permission_classes=[IsInstructorOrAuthenticatedReadOnly]
    queryset=Course.objects.all()
    serializer_class=CoursesSerializer



# here lookup_url_kwarg is the name of url arguments name

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[IsInstructorOrReadOnly]
    queryset=Course.objects.all()
    serializer_class=CoursesSerializer
    lookup_field='id'
    lookup_url_kwarg='course_id'


class EnrollmentCreateView(generics.CreateAPIView):
    serializer_class=EnrollmentSerializer
    permission_classes=[IsStudent]

    def perform_create(self, serializer):
        course=get_object_or_404(Course, id=self.kwargs['course_id'])
        serializer.save(student=self.request.user, course=course)

class EnrollmentStudentListView(generics.ListAPIView):
    serializer_class=EnrollmentSerializer
    permission_classes=[IsStudent]
    def get_queryset(self):
        return Enrollment.objects.filter(student=self.request.user)

class EnrollmentInstructorListView(generics.ListAPIView):
    permission_classes=[IsInstructor]
    queryset=Enrollment.objects.all()
    serializer_class=EnrollmentSerializer

