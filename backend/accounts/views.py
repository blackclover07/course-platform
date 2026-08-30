from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from accounts.serializers import UserSerializer, RegistrationResponseSerializers, VerifyOTPSerializer, \
    UserProfileSerializer
from .models import User
from .serializers import LoginTokenObtainPairSerializer
from .services.mailing import send_verification_mail
from .services.otp import generate_otp, store_otp, get_otp, increment_helper, delete_otp
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)


# Create your views here.

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        otp = generate_otp()

        store_otp(user.id, otp)
        send_verification_mail.delay(user.email,otp)

        return Response({
            'msg':'User created Successfully',
            'user': RegistrationResponseSerializers(user).data,
            'otp': otp,
        },status=status.HTTP_201_CREATED)



class VerifyEmailView(generics.GenericAPIView):
    serializer_class = VerifyOTPSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_id = serializer.validated_data["user_id"]
        submitted_otp = serializer.validated_data["otp"]

        user = get_object_or_404(User, id=user_id)

        otp_data = get_otp(user_id)

        if not otp_data:
            return Response(
                {
                    "detail": "OTP has expired or does not exist."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        stored_otp = otp_data["otp"]

        if submitted_otp != stored_otp:
            attempts = increment_helper(user_id)

            if attempts >= settings.OTP_MAX_ATTEMPTS:
                delete_otp(user_id)

                return Response({
                    "detail": "Maximum OTP attempts exceeds. Please request new OTP."
                },status=status.HTTP_400_BAD_REQUEST)

            return Response(
                {
                    "detail": "Invalid OTP.",
                    "attempts": attempts,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        user.is_email_verified = True
        user.save(update_fields=["is_email_verified"])

        delete_otp(user_id)

        return Response(
            {
                "detail": "Email verified successfully."
            },
            status=status.HTTP_200_OK,
        )


class LoginTokenObtainPairView(TokenObtainPairView):
    serializer_class = LoginTokenObtainPairSerializer



class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user