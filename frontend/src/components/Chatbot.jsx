import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your Clothing Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
      
      const response = await axios.post(`${apiUrl}/api/chatbot`, {
        message: userMessage
      });

      if (response.data.success) {
        setMessages(prev => [...prev, { text: response.data.reply, isBot: true }]);
      } else {
        setMessages(prev => [...prev, { text: "Sorry, I couldn't understand that.", isBot: true }]);
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, { text: "Sorry, I am having trouble connecting right now.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors transform hover:scale-105 duration-300"
        >
          <FontAwesomeIcon icon={faMessage} className="text-xl" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden transform transition-all duration-300">
          
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-medium text-white text-lg">Dealdex Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-gray-300 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-xl text-sm font-medium ${
                  msg.isBot
                    ? "bg-white border border-gray-200 text-gray-800 self-start rounded-tl-none shadow-sm"
                    : "bg-black text-white self-end rounded-tr-none shadow-md"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white border border-gray-200 text-gray-500 self-start max-w-[80%] p-3 rounded-xl rounded-tl-none shadow-sm text-sm flex gap-1 items-center font-medium">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200">
            <form onSubmit={handleSend} className="flex gap-2 items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none text-sm font-medium text-gray-900 placeholder-gray-500 border-none focus:ring-0 p-0"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="text-black hover:text-gray-600 disabled:text-gray-400 transition-colors"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Chatbot;