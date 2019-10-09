const express = require('express');
const answerRouter = express.Router();

const dbClient = require('mongodb').MongoClient;

answerRouter.get('/', (req, res) => {
    dbClient.connect('mongodb://localhost:27017/Mad-Minutes', (err, client) => {
        const db = client.db('Mad-Minutes');
        const collection = db.collection('answer-sets');

        collection.findOne({problemSetID : req.query.problemSetID}, (err, item) => {
            if (err) res.json({ });
            else res.json(item);
        });

        client.close();
    })
});


module.exports = answerRouter;