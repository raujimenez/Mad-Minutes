const express = require('express');
const gameRouter = express.Router();

const checker = require('../middleware/checker');
const problemGenerator = require('../middleware/problemGenerator');

gameRouter.get('/', (req, res) => {
    const problem = problemGenerator('');
    res.sendFile('src/cardPopulate.js');
    res.sendFile('src/submitAnswerButton.js');
    res.sendFile('src/searchNewNav.js');
    res.sendFile('html/index.html');
});

module.exports = gameRouter;