// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Liefere alles im aktuellen Ordner aus (index.html, CSS, JS, JSON…)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
