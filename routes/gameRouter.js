const express = require('express');
const gameRouter = express.Router();

const checker = require('../src/checker');
const problemGenerator = require('../src/problemGenerator');

gameRouter.get('/', (req, res) => {
    const problem = problemGenerator('');
    res.render('index.pug', {
        firstNum : problem['firstNum'],
        secondNum : problem['secondNum'],
        operand : problem['operand']
    });
});

module.exports = gameRouter;