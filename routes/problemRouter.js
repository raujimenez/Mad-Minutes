const express = require('express');
const problemRouter = express.Router();

const problemGenerator = require('../middleware/problemGenerator');
const answerGenerator = require('../middleware/checker');

const dbClient = require('mongodb').MongoClient;

problemRouter.get('/', (req, res) => {
    
    
    const problemGen = _ => {
        const problemArray = [];
        for(let i = 0; i < 20; i++) 
            problemArray.push(problemGenerator(''));
        return problemArray;
    }

    const answerGen = (problemArray) => {
        const answerArray = []; 
        problemArray.forEach((problem) => answerArray.push(answerGenerator(problem.firstNum, problem.secondNum, problem.operand)))
        return answerArray;
    }

    const problems = problemGen();
    const answers = answerGen(problems);
    
    dbClient.connect('mongodb://localhost:27017/Mad-Minutes', (err, client) => {
        const db = client.db('Mad-Minutes');
        const problemCollection = db.collection('problem-sets');
        const answerCollection = db.collection('answer-sets');
        
        const problemObject = {problems};
        problemCollection.findOneAndUpdate(problemObject, {$set : problemObject}, {upsert : true});
        
        problemCollection.findOne(problemObject).then((document) => {
            const modifiedAnswer = {answers, problemSetID: document._id.valueOf() };
            //TODO fix this dumbass error fucking fuckl
            answerCollection.findOneAndUpdate(modifiedAnswer, {$set : modifiedAnswer}, {upsert:true});
        });
 
        client.close();
    });

    res.send('inserted ' + JSON.stringify(problems));
})

module.exports = problemRouter;