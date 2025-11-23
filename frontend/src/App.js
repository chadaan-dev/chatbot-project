import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chat from './components/Chat';
import History from './components/History';
import UserSelector from './components/UserSelector';

function App() {
  const [activeUser, setActiveUser] = useState('A'); // Estado de usuário ativo

  return (
    <Router>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
        <h1>Chat de Atendimento Simulado</h1>
        <UserSelector activeUser={activeUser} setActiveUser={setActiveUser} />
        <nav style={{ marginTop: 10 }}>
          <Link to="/" style={{ marginRight: 10 }}>Chat</Link>
          <Link to="/historico">Histórico</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Chat activeUser={activeUser} />} />
          <Route path="/historico" element={<History activeUser={activeUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;