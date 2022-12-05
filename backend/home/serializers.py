from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'first_name', 'last_name', 'username', 'codice_fiscal', 'gender', 'password', 'confirm_password', 'dob', 'region_of_birth', 'country', 'phone_no']