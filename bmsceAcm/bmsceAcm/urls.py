from django.contrib import admin
from django.urls import path, include
# from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('events.urls')),
    path('', include('posts.urls')),
    path('summernote/', include('django_summernote.urls')),
    path("admin/", admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
