'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChatButton, ChatContainer } from './style';
import { ChatBubbleProps } from './typo';



const ChatBubble: React.FC<ChatBubbleProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: 'Olá! Como podemos te ajudar?', sender: 'bot' },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null); 
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messageInputRef.current) {
      messageInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: currentMessage.trim(), sender: 'user' },
      ]);
      setCurrentMessage(''); // Limpa o input
      // Simula uma resposta do bot (opcional)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Recebemos sua mensagem e entraremos em contato em breve!', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault(); 
      handleSendMessage();
    }
  };

  const handleStartConversation = () => {
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
    // Limpar mensagens iniciais ou adicionar uma nova mensagem de "conversar iniciada"
    // setMessages([]); // Limpa mensagens anteriores
  };

  return (
    <>
      <ChatContainer isOpen={isOpen}>
        {/* Header do Chat */}
        <div className="bg-darkBackground text-white p-4 rounded-t-lg flex items-center gap-3">
          {/* Ícone de balão de chat no header */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gold"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 7.6 4.7 8.38 8.38 0 0 1 .9 3.8v.5z"></path>
          </svg>
          <h3 className="font-semibold text-lg text-black">Suporte Dourado Cash</h3>
        </div>

        {/* Corpo do Chat */}
        <div className="flex-1 p-4 bg-gray-50 text-darkBackground overflow-y-auto flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200 text-gray-800 self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Elemento para scrollar até */}

          {/* Bloco "Estamos conectados" */}
          <div className="bg-white p-3 rounded-lg shadow-sm mt-auto mb-4 text-darkBackground">
            <p className="font-semibold text-sm mb-1">Estamos conectados</p>
            <p className="text-xs text-gray-600 mb-2">Normalmente responde em alguns minutos</p>
            <button
              onClick={handleStartConversation}
              className="flex items-center justify-between w-full text-sm text-gold hover:text-darkGold transition-colors duration-200"
            >
              <span>Iniciar Conversa</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Placeholder para a parte inferior */}
          <p className="text-center text-xs text-gray-400 mt-2">Desenvolvido por Dourado.tech</p>
        </div>

        {/* Área de Input da Mensagem */}
        <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
          <textarea
            ref={messageInputRef}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            rows={1} // Altura inicial
            placeholder="Digite sua mensagem..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="bg-gold text-darkBackground p-2 rounded-full hover:bg-darkGold transition-colors duration-200"
            title="Enviar mensagem"
          >
            {/* Ícone de Enviar (seta para a direita) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </ChatContainer>

      <ChatButton onClick={toggleChat} isOpen={isOpen}>
        {/* Ícone de balão de chat ou 'X' */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-message-circle"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 7.6 4.7 8.38 8.38 0 0 1 .9 3.8v.5z"></path>
          )}
        </svg>
      </ChatButton>
    </>
  );
};

export default ChatBubble;
