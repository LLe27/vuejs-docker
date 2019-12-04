const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET 
router.get('/', async (req, res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray());
})

// POST 
router.post('/', async (req, res) => {
    const users = await loadUsersCollection();
    const result = await users.insertOne({
        createdAt: new Date(),
        email: req.body.email,
        password: req.body.password
    });

    res.status(201).send(result);
})

// DELETE 
router.delete('/:id', async (req, res) => {
    const users = await loadUsersCollection();
    await users.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })

    res.status(200).send();
})

async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://mongodb:27017/restapi', {
        useNewUrlParser: true
    });

    return client.db('app').collection('users');
}

module.exports = router;