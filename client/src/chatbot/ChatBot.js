import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const messageObj = { text: input, type: 'user' };
    let updatedMessages = [...messages];

    if (editingIndex !== null) {
      updatedMessages[editingIndex] = messageObj;
      if (updatedMessages[editingIndex + 1]?.type === 'bot') {
        updatedMessages.splice(editingIndex + 1, 1);
      }
      setEditingIndex(null);
    } else {
      updatedMessages.push(messageObj);
    }

    setMessages(updatedMessages);
    setInput('');
    setSuggestions([]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        prompt: input,
      });

      setMessages([...updatedMessages, { text: response.data.reply, type: 'bot' }]);
    } catch (err) {
      setMessages([...updatedMessages, { text: '⚠️ Error from AI bot.', type: 'bot' }]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setInput(messages[index].text);
  };

  const handleDelete = (index) => {
    const updatedMessages = [...messages];
    const isBotReply = messages[index + 1]?.type === 'bot';
    updatedMessages.splice(index, isBotReply ? 2 : 1);
    setMessages(updatedMessages);
    if (editingIndex === index) {
      setEditingIndex(null);
      setInput('');
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleInputChange = async (e) => {
    const val = e.target.value;
    setInput(val);

    const trimmedVal = val.trim();

    if (trimmedVal === '') {
      setSuggestions([]);
      return;
    }

    if (trimmedVal.length >= 3) {
      try {
        const res = await axios.post('http://localhost:5000/api/suggestions', {
          partial: trimmedVal,
        });
        setSuggestions(res.data.suggestions || []);
      } catch {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="floating-chatbot">
      <div
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Ask AI"
      >
        💬
      </div>

      {isOpen && (
        <div className="chatbot-dialog">
          <div className="chatbot-header">
            Career Assistant
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.type} ${msg.type === 'user' ? 'hoverable' : ''}`}
              >
                <span>{msg.text}</span>
                {msg.type === 'user' && (
                  <div className="msg-actions">
                    <i className="action-icon edit" title="Edit" onClick={() => handleEdit(idx)}>✏️</i>
                    <i className="action-icon delete" title="Delete" onClick={() => handleDelete(idx)}>🗑️</i>
                    <i className="action-icon copy" title="Copy" onClick={() => handleCopy(msg.text)}>📋</i>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chatbot-input" style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Ask about careers, skills, goals..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>
              {editingIndex !== null ? 'Update' : 'Send'}
            </button>

            {suggestions.length > 0 && (
              <ul className="suggestion-box">
                {suggestions.map((sug, i) => (
                  <li key={i} onClick={() => {
                    setInput(sug);
                    setSuggestions([]);
                  }}>
                    {sug}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
