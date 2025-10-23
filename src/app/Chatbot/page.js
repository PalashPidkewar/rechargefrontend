'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { sendMessage, startChat } from '../chatapi/page';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userId, setUserId] = useState(null);
  const [showButton, setShowButton] = useState(false); // 👈 added
  const chatWindowRef = useRef(null);

  // ✅ Show button only after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 235) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleStart = async () => {
    try {
      const data = await startChat();
      setUserId(data.conversationId);

      const initialMsgs = Array.isArray(data.message)
        ? data.message.map(msg => ({ from: 'bot', text: msg || '' }))
        : [{ from: 'bot', text: data.message || '' }];

      setMessages(initialMsgs);
    } catch (err) {
      console.error(err);
      alert('Failed to start chat. Try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg = userInput.trim();
    setMessages(prev => [...prev, { from: 'user', text: userMsg }]);
    setUserInput('');

    try {
      const data = await sendMessage(userId, userMsg);
      const botMsgs = Array.isArray(data.message)
        ? data.message.map(msg => ({ from: 'bot', text: msg || '' }))
        : [{ from: 'bot', text: data.message || '' }];

      setMessages(prev => [...prev, ...botMsgs]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { from: 'bot', text: 'Oops! Something went wrong.' }]);
    }
  };

  return (
    <>
      {/* Floating Chat Icon (only after scroll) */}
      {showButton && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-3 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 z-50 transition-transform transform hover:scale-110"
        >
          <FaComments size={30} />
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-5 left-5 w-[90%] sm:w-80 md:w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col max-h-[50vh] sm:max-h-[60vh] md:max-h-[50vh] 
        transform transition-all duration-300 ease-in-out origin-bottom-left
        ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-400 text-white px-4 py-2 rounded-t-lg">
          <h2 className="text-lg font-semibold">PATH RECHARGE :: Chat with Us</h2>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            <FaTimes />
          </button>
        </div>

        {/* Chat Messages */}
        <div ref={chatWindowRef} className="flex-1 overflow-y-auto p-3 bg-gray-50 space-y-2 text-sm">
          {messages.map((msg, idx) => {
            const isBot = msg.from === 'bot';
            return (
              <div key={idx} className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start`}>
                {isBot && (
                  <div className="relative w-10 h-10 mr-2 mt-[-4px]">
                    <img
                      src="/Image/logo.png"
                      alt="Bot Logo"
                      className="w-full h-full object-contain bg-white rounded-lg shadow-sm"
                    />
                    <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                )}
                <div
                  className={`p-2 rounded-md max-w-xs whitespace-pre-line ${
                    isBot
                      ? 'bg-blue-100 text-left text-gray-800'
                      : 'bg-green-100 text-gray-800 text-right'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: (msg.text || '').replace(
                      /\[([^\]]+)\]\(([^)]+)\)/g,
                      '<a href="$2" class="text-blue-600 underline" target="_blank" rel="noopener noreferrer">$1</a>'
                    ),
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Input Section */}
        <div className="p-2 border-t border-gray-300">
          {!userId ? (
            <button
              onClick={handleStart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
            >
              Start Chat
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 border border-gray-500 rounded-md focus:outline-none focus:ring focus:border-blue-400 text-black"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </form>
          )}

          <p className="text-xs text-center mt-2 text-gray-500 flex items-center justify-center space-x-1">
            <span>powered by:</span>
            <img src="/Image/logo.png" alt="Logo" className="h-4 w-5" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
