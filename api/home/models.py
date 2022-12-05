from django.db import models

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    codice_fiscal = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    confirm_password = models.CharField(max_length=100)
    dob = models.CharField(max_length=100)
    region_of_birth = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=100)

    
    #class Meta:
        #verbrose_name_plural = "1. Students"
