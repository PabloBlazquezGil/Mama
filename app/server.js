const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Servir archivos estáticos (imágenes, css, js) ──────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── Rutas de las páginas ────────────────────────────────────────────────────
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/obras', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'obras.html'));
});

app.get('/comunidad', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comunidad.html'));
});

app.get('/noticias', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'noticias.html'));
});

app.get('/asi-soy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'asi-soy.html'));
});

app.get('/tarzan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tarzan.html'));
});

app.get('/peter-pan', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'peter-pan.html'));
});

app.get('/hercules', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hercules.html'));
});

// ─── 404 – página no encontrada ─────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ─── Arrancar servidor ───────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
