<h1> 𝍕 Sobre</h2>
<h3>Este é um protótipo fullstack composto por:</h3>

- Backend: Django + Django REST Framework
- Frontend: React
- Banco: SQLite (padrão do Django)
- Gerenciamento de Estado: React Hooks
- Controle de Versão: Git

>O objetivo do projeto é simular um sistema de chat entre dois usuários mockados ("Usuário A" e "Usuário B"), com histórico de mensagens individual.

## 🧪 Como Testar

- Inicie o backend (localhost:8000)
- Inicie o frontend (localhost:3000)
- Escolha "Usuário A" ou "Usuário B"
- Envie mensagens
- Veja a resposta mockada aparecer
- Acesse /historico para ver o histórico filtrado

## 🚀 Como Rodar o Projeto Localmente
🟦 Clonando o repositório: 

```git clone https://github.com/seu-usuario/seu-repo.git```
```cd chatbot-project```

## 🛠️ BACKEND (Django)

📌 1. Entrar na pasta do backend: 

```cd backend```

📌 2. Criar um ambiente virtual (opcional, mas recomendado):

```python -m venv venv```

Ativar no Windows:

```vvenv\Scripts\activate```

📌 3. Instalar dependências:

```pip install -r requirements.txt```

Ou, caso não exista requirements.txt, instale manualmente:

```pip install django djangorestframework```

📌 4. Rodar migrações:

```python manage.py migrate```

📌 5. Iniciar o servidor backend:

```python manage.py runserver```

O backend estará rodando em:

➡️ http://127.0.0.1:8000/

## 🟩 FRONTEND (React)

📌 1. Entrar na pasta do frontend:

```cd ../frontend```

📌 2. Instalar dependências:

```npm install```

📌 3. Rodar o servidor frontend:

```npm start```

O frontend estará disponível em:

➡️ http://localhost:3000/

### 🔗 Comunicação Backend ↔ Frontend

- POST http://127.0.0.1:8000/api/messages/
- GET  http://127.0.0.1:8000/api/messages/?user=A

# 🧠 Decisões Técnicas

## 🟦 Django (Backend)
✔ Modelagem

Decidi criar um modelo Message com os campos:
- user – identifica qual usuário enviou (A ou B)
- text – mensagem enviada pelo usuário
- response – resposta mockada gerada pelo backend
- timestamp – data/hora da mensagem

>Isso simplifica consultas filtrando por usuário, além de manter cada interação (pergunta + resposta) unificada em um único registro.

✔ Endpoints

Implementei dois endpoints simples:
- POST /api/messages/ → salva a mensagem e retorna uma resposta simulada
- GET /api/messages/?user=A → retorna apenas o histórico daquele usuário

>Usei o Django REST Framework por facilitar a serialização e manutenção.

## 🟩 React (Frontend)
✔ Gerenciamento de Estado

Optei por usar React Hooks (useState, useEffect) porque:
- O estado é simples: mensagem atual, lista de mensagens, usuário ativo.
- Não há necessidade de Redux ou Context API.
- O usuário é escolhido via botão/dropdown e guardado em um useState.

✔ Rotas

Usei react-router-dom para criar:
- ```/``` → tela de chat
- ```/historico``` → histórico filtrado pelo usuário ativo

>Assim o frontend se mantém organizado e com fácil expansão no futuro.

## 🚀 Tecnologias
<div>
  <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white">
</div>

# Autores

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/195770855?v=4" width=115><br><sub>Charles Daniel</sub>](https://github.com/chadaan-dev) |
| :---: |
