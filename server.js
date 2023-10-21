// server path /
const express = require('express');
const path = require('path');
const api = require('./routes/index.js')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api); // route to /api

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));