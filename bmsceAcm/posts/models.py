from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


class Categories(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(default="", null=False)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Categories.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while (queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Categories.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = Categories.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except Categories.DoesNotExist:
                pass

        super(Categories, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50, unique=False, default="acm")
    slug = models.SlugField()
    category = models.ForeignKey(
        'Categories', on_delete=models.CASCADE, null=True, blank=True)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while (queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass

        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} | {self.category}"
