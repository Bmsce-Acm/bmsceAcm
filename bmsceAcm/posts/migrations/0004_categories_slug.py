# Generated by Django 3.0.7 on 2022-11-25 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20220925_1236'),
    ]

    operations = [
        migrations.AddField(
            model_name='categories',
            name='slug',
            field=models.SlugField(default=''),
        ),
    ]