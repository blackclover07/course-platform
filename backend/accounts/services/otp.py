import secrets
from .redis_config import redis_client
from django.conf import settings


def generate_otp():
    """Generate OTP using secrets.py"""
    return str(secrets.randbelow(900000)+100000)


def store_otp(user_id,otp):
    """Store an OTP in redis."""
    key=f"email_verification:{user_id}"

    redis_client.hset(
        key,
        mapping={
            "otp": otp,
            "attempts":0,
        }
    )

    redis_client.expire(key,settings.OTP_TTL)


def get_otp(user_id):
    """Get an OTP from redis."""
    key = f"email_verification:{user_id}"

    return redis_client.hgetall(key)

def delete_otp(user_id):
    """Delete an OTP from redis."""
    key = f"email_verification:{user_id}"

    redis_client.delete(key)

def increment_helper(user_id):
    key = f"email_verification:{user_id}"

    return redis_client.hincrby(key,"attempts",1)