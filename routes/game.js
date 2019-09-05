const express = require('express');
const gameRouter = express.Router();

const checker = require('../src/checker');

gameRouter.get('/', (req, res) => {
    res.render('index.pug', {
        firstNum : '10',
        secondNum : '1',
        operand : '+'
    });
});

module.exports = gameRouter;