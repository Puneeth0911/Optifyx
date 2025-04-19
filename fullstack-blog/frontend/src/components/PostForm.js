import React, { useState } from "react";
import API from "../api";

const PostForm = () => {
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", form);
      alert("Post created!");
    } catch (err) {
      alert("Error creating post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Author" onChange={(e) => setForm({ ...form, author: e.target.value })} />
      <textarea placeholder="Content" onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
