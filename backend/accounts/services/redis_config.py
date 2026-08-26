from redis import Redis

from django.conf import settings

redis_client =  Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT,db=settings.REDIS_DB,decode_responses=True)

def test_redis():
    redis_client.set('test_key', 'hello',ex=60)

    value = redis_client.get('test_key')
    return value

