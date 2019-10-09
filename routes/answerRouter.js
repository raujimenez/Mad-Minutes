require('dotenv').config();

const express = require('express');
const answerRouter = express.Router();

const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;

const answerGenerator = require('../middleware/checker');

answerRouter.get('/', (req, res) => {
    dbClient.connect(process.env.DBCONNECTION, (err, client) => {
        const db = client.db('Mad-Minutes');
        const problemCollection = db.collection('problem-sets');
        const id = String(req.query.id);

        problemCollection.find({_id : mongodb.ObjectId(id)}).toArray((error, items) => {
            const problems = items[0].problems;
            const answers = [];
            for(let i = 0; i < problems.length; i++) {
                const firstNum = Number(problems[i].firstNum);
                const secondNum = Number(problems[i].secondNum);
                const operand = problems[i].operand;
                answers.push(answerGenerator(firstNum, secondNum, operand));
            }
            res.json(answers);
        });

        client.close();
    })
});


module.exports = answerRouter;