from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager


# Create your models here.

ROLE_CHOICES=[
    ('STUDENT','student'),
    ('INSTRUCTOR','instructor'),
]


class User(AbstractUser):
    username=None
    email = models.EmailField('email address',unique=True,max_length=254)
    role = models.CharField(max_length=20,choices=ROLE_CHOICES,default='STUDENT')

    # is_active=models.BooleanField(default=True)
    # is_staff=models.BooleanField(default=False)

    objects=CustomUserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
