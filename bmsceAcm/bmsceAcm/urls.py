from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    # Frontend URLs
    path('', TemplateView.as_view(template_name='index.html')),
    path('events/', TemplateView.as_view(template_name='index.html')),
    path('team/', TemplateView.as_view(template_name='index.html')),
    path('gallery/', TemplateView.as_view(template_name='index.html')),
    path('blogs/', TemplateView.as_view(template_name='index.html')),

    # Backend URLs
    path("admin/", include('bmsceAcmAdmin.urls')),
    path("djadmin/", admin.site.urls),
    path('', include('events.urls')),
    path('', include('posts.urls')),
    path('summernote/', include('django_summernote.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns += [re_path(r'^.*',
#                         TemplateView.as_view(template_name='index.html'))]
