require('dotenv').config();

const express = require('express');
const problemRouter = express.Router();

const problemGenerator = require('../middleware/problemGenerator');
const answerGenerator = require('../middleware/checker');

const dbClient = require('mongodb').MongoClient;

problemRouter.get('/', (req, res) => {
    const problemGen = (size) => {
        const problemArray = [];
        for(let i = 0; i < size; i++) 
            problemArray.push(problemGenerator(''));
        return problemArray;
    }

    let problems = problemGen(0);
    if(req.query.size != undefined)
        problems = problemGen(req.query.size);
    else
        problems = problemGen(30);
    dbClient.connect(process.env.DBCONNECTION, (err, client) => {
        const db = client.db('Mad-Minutes');
        const problemCollection = db.collection('problem-sets');
        
        const problemObject = {problems};
        problemCollection.findOneAndUpdate(problemObject, {$set : problemObject}, {upsert : true});
        
        client.close();
    });

    res.send('inserted ' + JSON.stringify(problems));
})

module.exports = problemRouter;