const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET
router.get('/', async (req, res) => {
    try {
        const collection = await loadUsersCollection();
        const users = await collection.find({}).toArray();

        res.send({
            data: users,
            result: "OK",
            status: 200
        });
    } catch (err) {
        // Database connection error handling
        res.status(404).send({
            result: "Database Not Found",
            status: 404
        });
    }
})

// POST
router.post('/', async (req, res) => {
    try {
        const users = await loadUsersCollection();
        await users.insertOne({
            createdAt: new Date(),
            email: req.body.email,
            password: req.body.password
        });

        res.status(201).send({
            result: "Created",
            status: 201
        });
    } catch (err) {
        // Database connection error handling
        res.status(404).send({
            result: "Database Not Found",
            status: 404
        });
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const users = await loadUsersCollection();
        await users.deleteOne({
            _id: new mongodb.ObjectID(req.params.id)
        })

        res.status(200).send({
            result: "Deleted",
            status: 200
        });
    } catch (err) {
        // Database connection error handling
        res.status(404).send({
            result: "Database Not Found",
            status: 404
        });
    }
})

async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mongodb:27017/restapi', {
        useNewUrlParser: true
    });

    return client.db('app').collection('users');
}

module.exports = router;