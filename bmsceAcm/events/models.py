from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    thumbnail = models.ImageField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.name}"
