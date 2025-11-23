from django.db import models

class Message(models.Model):
    SENDER_CHOICES = [
        ('A', 'Usuário A'),
        ('B', 'Usuário B'),
        ('BOT', 'Bot'),
    ]
    sender = models.CharField(max_length=4, choices=SENDER_CHOICES)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.text[:50]}"