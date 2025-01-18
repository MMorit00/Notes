const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
require('./db/mongoose');

app.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'notes.json'), 'utf-8', (err, data) => {
        if (err) {
            return console.error(err); 
        } else {
           res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});