import React, { useEffect, useState } from "react";
import API from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>🗒️ All Blog Posts</h2>
      {posts.length === 0 && <p>No posts yet. Be the first to write!</p>}
      {posts.map((post) => (
        <div className="post-card" key={post._id}>
          <h3>{post.title}</h3>
          <p><i>by {post.author}</i></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
