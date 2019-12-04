'use strict';

const express = require('express');

// Constants
const PORT = process.env.port || 5000;
const HOST = '0.0.0.0';

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://mongodb:27017/restapi';

// // Database Name
// const dbName = 'myproject';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//   client.close();
// });


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, () => {
  console.log(`Running on PORT:${PORT}`);
});