import React, { useEffect, useState } from 'react';

export default function History({ activeUser }) {
  const [messages, setMessages] = useState([]);

  const loadHistory = async (user) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/messages/?sender=${user}`);
      const data = await res.json();
      if (res.ok) setMessages(data);
      else console.error(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadHistory(activeUser);
  }, [activeUser]);

  return (
    <div>
      <h2>Histórico (Usuário {activeUser})</h2>
      <div style={{ border: '1px solid #ddd', padding: 10 }}>
        {messages.length === 0 && <p>Nenhuma mensagem ainda.</p>}
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: 8 }}>
            <strong>{m.sender === 'BOT' ? 'Bot' : `Usuário ${m.sender}`}</strong>: {m.text}
            <div style={{ fontSize: 12, color: '#666' }}>{new Date(m.created_at).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}