from .models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework.exceptions import AuthenticationFailed


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email','password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user=User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user




class VerifyEmailSerializer(serializers.Serializer):
    user_id =  serializers.UUIDField()
    otp = serializers.CharField(max_length=6,min_length=6)



class RegistrationResponseSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id',)

class VerifyOTPSerializer(serializers.Serializer):
    user_id=serializers.UUIDField()
    otp = serializers.CharField(max_length=6,min_length=6)





# make this serializer by inheriting the provided serializer class and override the validate method to accept new permission
class LoginTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        if not self.user.is_email_verified:
            raise AuthenticationFailed('Please verify your email before logging in.')

        return data

