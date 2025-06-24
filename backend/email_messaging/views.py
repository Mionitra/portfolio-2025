from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from .forms import ContactForm
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        if request.content_type == 'application/json':
            data = json.loads(request.body)
            form = ContactForm(data)
        else:
            form = ContactForm(request.POST)
        if form.is_valid():
            nom = form.cleaned_data['nom']
            email = form.cleaned_data['email']  # Email fourni par l'utilisateur
            message = form.cleaned_data['message']
            
            message_complete = f"Message de {nom} <{email}> :\n\n{message}"

            # Utiliser EmailMessage pour ajouter reply_to
            email_obj = EmailMessage(
                subject='Nouveau message de contact',
                body=message_complete,
                from_email=settings.DEFAULT_FROM_EMAIL,  # Expéditeur réel (ton compte Gmail)
                to=[settings.DEFAULT_TO_EMAIL],          # Destinataire réel
                reply_to=[email],                        # Pour que "Répondre" réponde au vrai utilisateur
            )
            email_obj.send()
            # Réponse JSON pour le frontend React
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)
    else:
        return JsonResponse({'detail': 'Method not allowed'}, status=405)
