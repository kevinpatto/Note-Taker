// server path /api/notes
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../utils/fsUtils.js'); // fs helpers (NOT MY CODE)
const { v4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    const id = v4();

    if (req.body) {
        const newNote = {
            title,
            text,
            id
        };

        console.log(newNote);

        // readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

notes.delete('/', (req, res) => {

});

module.exports = notes;
