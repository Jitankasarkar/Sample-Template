const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
