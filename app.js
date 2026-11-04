const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Works on my machine.');
});

module.exports = app;