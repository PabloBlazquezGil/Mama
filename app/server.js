const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/comunidad', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comunidad.html'));
});

app.get('/hercules', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hercules.html'));
});

app.get('/noticias', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'noticias.html'));
});

app.get('/obras', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'obras.html'));
});

app.get('/peter-pan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'peter-pan.html'));
});

app.get('/tarzan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tarzan.html'));
});

app.get('/asi-soy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'asi-soy.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
