import React, { useState } from 'react';
import './YourComponent.css';
import './ChatButton.css';
import chatlogo from '../images/chat_logo.png'

const YourComponent = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleChatToggle = () => {
    setChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setChatMessages([...chatMessages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <button onClick={handleChatToggle} className='chat-button'><img src={chatlogo}/></button>

      {isChatOpen && (
        <div className="chat-box">
          <div className="message-container">
            {chatMessages.map((message, index) => (
              <div key={index} className="message">
                You: {message}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
