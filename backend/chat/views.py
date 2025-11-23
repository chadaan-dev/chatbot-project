from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import MessageSerializer

# criar mensagem do usuário e resposta mockada
@api_view(['POST'])
def create_message(request):
    # Expect JSON: { "sender": "A" or "B", "text": "..." }
    sender = request.data.get('sender')
    text = request.data.get('text')
    if sender not in ['A', 'B'] or not text:
        return Response({'detail': 'sender deve ser "A" ou "B" e text é obrigatório.'}, status=status.HTTP_400_BAD_REQUEST)

    # Salva mensagem do usuário
    user_msg = Message.objects.create(sender=sender, text=text)
    user_ser = MessageSerializer(user_msg)

    # Cria resposta mockada diferente para A e B
    if sender == 'A':
        bot_text = "Obrigado pelo contato, Usuário A. Em breve responderemos."
    else:
        bot_text = "Recebemos sua mensagem, Usuário B. A equipe retornará em breve."

    bot_msg = Message.objects.create(sender='BOT', text=bot_text)
    bot_ser = MessageSerializer(bot_msg)

    # Retornar as duas mensagens (cliente exibirá ambas)
    return Response({
        'user_message': user_ser.data,
        'bot_message': bot_ser.data
    }, status=status.HTTP_201_CREATED)

# listar mensagens por sender (A ou B) — traz também as respostas do BOT relacionadas (usaremos todas BOTs)
@api_view(['GET'])
def list_messages(request):
    # query param ?sender=A
    sender = request.query_params.get('sender')
    if sender not in ['A', 'B']:
        return Response({'detail': 'Informe ?sender=A ou ?sender=B'}, status=status.HTTP_400_BAD_REQUEST)

    # Pega mensagens do usuário e as mensagens de bot (filtramos por created_at para manter ordem cronológica)
    messages = Message.objects.filter(models.Q(sender=sender) | models.Q(sender='BOT')).order_by('created_at')
    ser = MessageSerializer(messages, many=True)
    return Response(ser.data)