from django.db import models
import uuid
from django.utils.text import slugify


# Create your models here.
class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Category(BaseModel):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True,blank=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
        ordering = ['-created_at']

    def __str__(self):
        return self.name

class Course(BaseModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE,related_name='courses')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    image = models.ImageField(upload_to="courses/",null=True,blank=True)

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class Section(BaseModel):
    course=models.ForeignKey(Course,on_delete=models.CASCADE,related_name="sections")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = "Section"
        verbose_name_plural = "Sections"
        ordering = ["order"]

    def __str__(self):
        return f"{self.course.title} - {self.title}"


class Lesson(BaseModel):
    section =   models.ForeignKey(Section,on_delete=models.CASCADE,related_name='lessons')

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    content = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = "Lesson"
        verbose_name_plural = "Lessons"
        ordering = ["order"]

    def __str__(self):
        return self.title
