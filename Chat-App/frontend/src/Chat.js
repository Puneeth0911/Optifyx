import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

const socket = io("http://localhost:5000");

const Chat = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const userName = location.state?.name || "Guest";

  useEffect(() => {
    socket.emit("join", userName);

    socket.on("message", (msg) => {
      setAllMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userName]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", { text: message, name: userName });
      setMessage("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {userName}</h2>
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
          borderRadius: "6px",
          marginBottom: "10px",
        }}
      >
        {allMessages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.name}: </strong> {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "10px", width: "70%" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            background: "#2980b9",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
