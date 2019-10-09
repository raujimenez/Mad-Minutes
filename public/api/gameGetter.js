const express = require('express');
const gameGetter = express.Router();

const dbClient = require('mongodb').MongoClient;

const problemGenerator = require('../../middleware/problemGenerator');

gameGetter.get('/', (req,res) => {
    dbClient.connect("mongodb://localhost:27017/Mad-Minutes", (err, client) => {
        const db = client.db('Mad-Minutes');
        const collection = db.collection('problem-sets');

        collection.findOne({_id : req.query.id}, (err, item) => { })

        client.close();
    });
})

module.exports = gameGetter;