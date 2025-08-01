const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('✅ Jimmyverse Backend is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server live on port ${PORT}`);
});