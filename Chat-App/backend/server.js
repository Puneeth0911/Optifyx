const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React frontend URL
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("🟢 User connected");

  socket.on("join", (name) => {
    socket.username = name;
    io.emit("message", { text: `${name} joined the chat`, name: "System" });
  });

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      io.emit("message", {
        text: `${socket.username} left the chat`,
        name: "System"
      });
    }
    console.log("🔴 User disconnected");
  });
});

server.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
