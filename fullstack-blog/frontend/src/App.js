import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="hero">
          <h1>📝 Optifyx Blog</h1>
          <p>Share your thoughts. Read from others.</p>
        </header>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<PostForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer className="footer">
          © 2025 Optifyx Blog — Built with ❤️ by Puneeth
        </footer>
      </div>
    </Router>
  );
}

export default App;
