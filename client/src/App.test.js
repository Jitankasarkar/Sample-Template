import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch data from backend
        axios.get("http://localhost:3001/api/message")
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error("Error fetching the message:", error);
            });
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>React-Backend Integration</h1>
            <p><strong>Message from Backend:</strong> {message || "Loading..."}</p>
        </div>
    );
}

export default App;
