// server path /api
const express = require('express');

const notesRouter = require('./notes.js');

const app = express();

app.use('/notes', notesRouter); // route to /api/notes

module.exports = app;
