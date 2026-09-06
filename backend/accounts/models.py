from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager
import uuid


# Create your models here.

ROLE_CHOICES=[
    ('STUDENT','student'),
    ('INSTRUCTOR','instructor'),
]


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username=None
    email = models.EmailField('email address',unique=True,max_length=254)
    role = models.CharField(max_length=20,choices=ROLE_CHOICES,default='STUDENT')
    is_email_verified = models.BooleanField(default=False)
    profile_image = models.ImageField(null=True,blank=True,upload_to='users/images/')
    # is_active=models.BooleanField(default=True)
    # is_staff=models.BooleanField(default=False)

    objects=CustomUserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
