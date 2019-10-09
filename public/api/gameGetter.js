require('dotenv').config();

const express = require('express');
const gameGetter = express.Router();

const mongodb = require('mongodb')
const dbClient = mongodb.MongoClient;

const problemGenerator = require('../../middleware/problemGenerator');

gameGetter.get('/', (req,res) => {
    dbClient.connect(process.env.DBCONNECTION, (err, client) => {
        const db = client.db('Mad-Minutes');
        const collection = db.collection('problem-sets');
        const id = mongodb.ObjectId(req.query.id);
        collection.find({_id : id}).toArray((error, items) => {
            res.json(items);
        })

        client.close();
    });
})

module.exports = gameGetter;