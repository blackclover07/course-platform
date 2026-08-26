from rest_framework.permissions import BasePermission,SAFE_METHODS


class IsInstructorOrAuthenticatedReadOnly(BasePermission):

    """
        Permission for course list and creation endpoints.

        Read operations:
            Any authenticated user, including students and instructors,
            can view the course list.

        Write operations:
            Only authenticated instructors can create or perform other
            non-read operations.
    """


    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return request.user.is_authenticated

        return (
            request.user.is_authenticated
            and request.user.role == "INSTRUCTOR"
        )




class IsInstructorOrReadOnly(BasePermission):
    """
       Permission for course detail endpoints.

        Read operations:
            Any authenticated user (student or instructor) can view a course.

        Write operations:
            Only authenticated instructors can modify or delete a course,
            and they must be the instructor who owns the course.
    """
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and (  request.method in SAFE_METHODS or request.user.role=="INSTRUCTOR")
        )

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.instructor == request.user



class IsStudent(BasePermission):
    """
        Allows access only to authenticated users whose role is student.
    """

    def has_permission(self, request, view):
        return (request.user.is_authenticated and
                request.user.role=="STUDENT")


class IsInstructor(BasePermission):
    """
        Allows access only to authenticated users whose role is instructor.
    """

    def has_permission(self, request, view):
        return (request.user.is_authenticated and
                request.user.role=="INSTRUCTOR")

