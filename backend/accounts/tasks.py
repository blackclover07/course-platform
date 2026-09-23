import secrets
from django.core.mail import send_mail
from django.conf import settings
from config.redis import redis_client

def generate_otp():
    return f"{secrets.randbelow(5):06d}"



def verify_otp(stored_otp,entered_otp):
    return secrets.compare_digest(stored_otp, entered_otp)


def store_otp(email,otp):
    redis_client.hsetex(
        f"otp:{email}",
        mapping={
            "otp": otp,
            "attempts":0,
        },
        ex = settings.OTP_TTL,
    )


def send_mail(email,otp):
    pass