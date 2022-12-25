from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from pyexpat.errors import messages

from events.models import Event


def admin_login(request):
    try:
        if request.user.is_authenticated:
            return redirect('/admin/admindashboard/')
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user_obj = User.objects.filter(username=username)

            if not user_obj.exists():
                messages.info(request, 'Account Not Found')
                return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

            user_obj = authenticate(
                username=username,
                password=password
            )

            if user_obj and user_obj.is_superuser:
                login(request, user_obj)
                return redirect('/admin/admindashboard/')

            messages.info(request, 'Invalid password')
            return redirect('/')

        return render(request, 'login.html')

    except Exception as e:
        print(e)


def admin_dashboard(request):
    return render(request, 'adminDashboard.html')


def logout_view(request):
    logout(request)
    return redirect('/admin/')


# get all events list from events
def getEvents(request):
    allevents = Event.objects.all()
    return render(request, 'eventsAdmin.html', {'allevents': allevents})
