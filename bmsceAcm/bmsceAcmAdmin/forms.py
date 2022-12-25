from django import forms
from events.models import *
import datetime


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = '__all__'
