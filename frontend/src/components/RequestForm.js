import React, { useState } from "react";
import axios from "axios";
import "../styles/main.css";

export default function RequestForm({ onResponse , onRequestComplete}) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/request", {
        url,
        method,
        body: body ? JSON.parse(body) : null,
      });
      onResponse(res.data);
      if (onRequestComplete) onRequestComplete();
    } catch (err) {
      onResponse({ error: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>URL</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://api.example.com/data"
      />

      <label>Method</label>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>

      <label>Body (JSON)</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        placeholder='{"key":"value"}'
      ></textarea>

      <button type="submit">Send Request</button>
    </form>
  );
}
