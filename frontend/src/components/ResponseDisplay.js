import React from "react";
import "../styles/main.css";

export default function ResponseDisplay({ response }) {
  return (
    <div className="response-box">
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
