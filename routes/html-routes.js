const app = require('express');
const path = require('path');

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, `..public/index.html`));
});

app.get('exercise', (req, res) => {
    res.sendfile(path.join(__dirname, `..public/exercise.html`));
});

app.get('stats', (req, res) => {
    res.sendfile(path.join(__dirname, `..public/stats.html`));
});