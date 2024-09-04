import React from "react";
import "./Chat.css";
import seven from '../../assets/seven.png';
import eight from '../../assets/eight.png';
import nine from '../../assets/nine.png';
import ten from '../../assets/ten.png';

const Chat = () => {
  const chats = [
    {
      name: "Sarita Pofale",
      message: "Lorem Ipsum is simply ",
      time: "13:00",
      img: seven
    },
    {
      name: "Rutuja Shrinivas",
      message: "Lorem Ipsum is simply ",
      time: "11:00",
      img: eight
    },
    {
      name: "PP Group",
      message: "Lorem Ipsum is simply ",
      time: "13:00",
      img: nine
    },
    {
      name: "Varad Paranjape",
      message: "Lorem Ipsum is simply ",
      time: "13:00",
      img: ten,
      requestChat: true,
    },
  ];

  return (
    <div className="live-chat">
      <h2>Live Chat</h2>
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div key={index} className="chat-item">
            <div className="chat-left">
              <img src={chat.img} alt={chat.name} className="chat-img" />
              <div className="chat-status"></div>
            </div>
            <div className="chat-content">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-message">{chat.message}</div>
            </div>
            <div className="chat-right">
              <div className="chat-time">{chat.time}</div>
              {chat.requestChat && (
                <button className="request-chat">Request Chat</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">View all</div>
    </div>
  );
};

export default Chat;
