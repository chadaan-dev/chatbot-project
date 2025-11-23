import React, { useState } from 'react';

export default function Chat({ activeUser }) {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]); // mensagens exibidas na sessão atual

  const sendMessage = async () => {
    if (!text.trim()) return;
    try {
      const res = await fetch('http://127.0.0.1:8000/api/messages/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: activeUser, text })
      });
      const data = await res.json();
      if (res.ok) {
        // data: { user_message: {...}, bot_message: {...} }
        setMessages(prev => [...prev, data.user_message, data.bot_message]);
        setText('');
      } else {
        alert('Erro: ' + (data.detail || JSON.stringify(data)));
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao conectar com backend.');
    }
  };

  return (
    <div>
      <h2>Chat (Usuário {activeUser})</h2>
      <div style={{ border: '1px solid #ccc', height: 300, overflowY: 'auto', padding: 10 }}>
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: 8 }}>
            <strong>{m.sender === 'BOT' ? 'Bot' : `Usuário ${m.sender}`}</strong>: {m.text}
            <div style={{ fontSize: 12, color: '#666' }}>{new Date(m.created_at).toLocaleString()}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        <textarea value={text} onChange={e => setText(e.target.value)} rows={3} style={{ width: '100%' }} />
        <button onClick={sendMessage} style={{ marginTop: 6 }}>Enviar</button>
      </div>
    </div>
  );
}