from .models import BlogPost
from rest_framework import viewsets, permissions
from .serializers import BlogPostSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogPostSerializer
