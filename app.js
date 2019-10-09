const path = require('path');
const express = require('express');
const app = express();

const gameRouter = require('./routes/gameRouter');
const gameGetter = require('./public/api/gameGetter');

const port = '3000';

app.use(express.static('public/html'));
app.use(express.static('public/src'));
app.use(express.static('public/styles'));

app.use('/', gameRouter);
app.use('/set', gameGetter);

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});