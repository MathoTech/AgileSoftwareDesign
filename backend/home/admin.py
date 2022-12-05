from django.contrib import admin
from .models import Student
from . import models

admin.site.register(models.Student)
