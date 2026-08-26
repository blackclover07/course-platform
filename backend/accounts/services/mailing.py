from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail

@shared_task
def send_verification_mail(email,otp):
    send_mail(
        subject='Verification Your Email',
        message=f'Your OTP is {otp}',
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[email],
    )