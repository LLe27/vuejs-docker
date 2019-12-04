'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = process.env.port || 5000;
const HOST = '0.0.0.0';

// App
const app = express();
const users = require('./routes/api/users');

// Middleware
app.use(bodyParser.json());
app.use('/api/users', users);

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, () => {
  console.log(`Running on PORT:${PORT}`);
});