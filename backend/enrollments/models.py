from django.db import models
from courses.models import Course
from accounts.models import User

# Create your models here.

class Enrollment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE,related_name='enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE,related_name='enrollments')

    enrollment_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['student', 'course'],
                name='unique_student_course_enrollment')
        ]

    def __str__(self):
        return f'{self.student.email} - {self.course.title}'