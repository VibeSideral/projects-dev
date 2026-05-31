import React, { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';
import { SideMenu } from './components/SideMenu/SideMenu';
import ChatMessage from './components/ChatMessage/ChatMessage';
import { makeRequest } from './api/api';

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Olá, eu sou o ChatGPT. Como posso ajudar você hoje?"
  }]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { user: "me", message: input };
    setChatLog(prev => [...prev, userMessage]);
    setInput("");

    try {
        const response = await makeRequest(input);
        console.log("Resposta da API:", response); // ← veja o que chega
        const gptMessage = { user: "gpt", message: response };
        setChatLog(prev => [...prev, gptMessage]);
    } catch (error) {
        setChatLog(prev => [...prev, { 
            user: "gpt", 
            message: "Erro ao conectar com o servidor." 
        }]);
    }
};

  return (
    <div className="App">
      <SideMenu />
      <section className="chatbox">
        <div className="chatlog">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              className="chat-input-textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem aqui..."
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;