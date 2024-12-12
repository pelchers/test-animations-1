const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Handle all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 