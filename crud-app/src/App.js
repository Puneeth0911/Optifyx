import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("crud-items");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("crud-items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem("");
  };

  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(items[index]);
  };

  const saveEdit = () => {
    if (editText.trim() === "") return;
    const updated = [...items];
    updated[editingIndex] = editText;
    setItems(updated);
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div className="container">
      <h2>📋 Simple CRUD App</h2>

      <div className="input-group">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>💾 Save</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <button onClick={() => startEditing(index)}>✏️ Edit</button>
                <button onClick={() => deleteItem(index)}>❌ Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
