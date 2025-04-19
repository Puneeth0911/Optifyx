import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      navigate("/chat", { state: { name } });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>💬 Join Chat Room</h2>
      <form onSubmit={handleJoin}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px", width: "250px" }}
        />
        <br /><br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Join Now
        </button>
      </form>
    </div>
  );
}

export default Join;
