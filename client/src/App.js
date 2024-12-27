import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("http://localhost:3001/api/message")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Simple React Frontend</h1>
      <p><strong>Message:</strong> {message || "Loading..."}</p>
    </div>
  );
}

export default App;
