// server path /api/notes
const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../utils/fsUtils.js'); // fs helpers (NOT MY CODE)
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

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

notes.delete('/:id', (req, res) => {
    res.error('this feature is not yet finished');
    // const idDel = req.params.id;
    // let notesList = [];
    // readFromFile('./db/db.json')
    //     .then((data) => {
    //         notesList = JSON.parse(data)
    //     })
    //     .then(() => 
    //         console.log(notesList)
    //     );
    // notesList.forEach(element => {
    //     if (element.title === idDel) {

    //     }
    // });
});

module.exports = notes;
