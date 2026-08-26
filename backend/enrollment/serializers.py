from rest_framework import serializers
from .models import Enrollment

# create your serializers here

class EnrollmentSerializer(serializers.ModelSerializer):
    student = serializers.ReadOnlyField(source='student.email')
    course = serializers.ReadOnlyField(source='course.title')
    class Meta:
        model = Enrollment
        fields = [
            'id',
            'student',
            'course',
            'enrollment_date',
        ]

        read_only_fields = [
            'id',
            'student',
            'course',
            'enrollment_date',
        ]