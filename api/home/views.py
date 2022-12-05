from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from .serializers import StudentSerializer
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from . import models



# Create your views here.

"""class StudentList(APIView):
    def get(self,request):
        students = models.Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)"""

class StudentList(generics.ListCreateAPIView):
    queryset=models.Student.objects.all()
    serializer_class = StudentSerializer
    #permission_classes = [permissions.IsAuthenticated]

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Student.objects.all()
    serializer_class = StudentSerializer
    #permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def student_login(request):
    username=request.POST['username']
    password=request.POST['password']
    studentData=models.Student.objects.get(username=username,password=password)
    if studentData:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool': False})