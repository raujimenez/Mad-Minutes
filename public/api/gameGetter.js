const express = require('express');
const gameGetter = express.Router();

const problemGenerator = require('../../middleware/problemGenerator');

gameGetter.get('/', (req,res) => {
    const questions = [];
    for(let i = 0; i < 10; i++)
        questions.push(problemGenerator(''));
    res.json(questions);
})

module.exports = gameGetter;