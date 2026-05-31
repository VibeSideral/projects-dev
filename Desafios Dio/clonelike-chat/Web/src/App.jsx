import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [messages,setMessages] = useState(
    JSON.parse(localStorage.getItem('chat-history') || '[]')
  );
  const [text,setText] = useState('');

  useEffect(()=>{
    localStorage.setItem('chat-history', JSON.stringify(messages));
  },[messages]);

  async function send(){
    if(!text.trim()) return;

    const updated=[...messages,{role:'user',content:text}];
    setMessages(updated);
    setText('');

    const res=await axios.post('http://localhost:3000/chat',{
      messages:[
        {
          role:'system',
          content:'Você é um assistente especialista em programação.'
        },
        ...updated
      ]
    });

    setMessages(prev=>[
      ...prev,
      {role:'assistant',content:res.data.response}
    ]);
  }

  return (
    <div className="app">
      <div className="chat">
        <h1>AI Assistant</h1>

        <div className="messages">
          {messages.map((m,i)=>
            <div key={i} className={m.role}>
              {m.content}
            </div>
          )}
        </div>

        <div className="input">
          <input
            value={text}
            onChange={e=>setText(e.target.value)}
            placeholder="Digite uma mensagem"
          />
          <button onClick={send}>Enviar</button>
        </div>
      </div>
    </div>
  );
}