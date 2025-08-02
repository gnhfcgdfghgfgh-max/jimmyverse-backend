const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const sendWhatsApp = require('./callmebot-sender');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('✅ Jimmyverse Backend is running!');
});
app.post('/payhip-webhook', (req, res) => {
  const data = req.body;
  console.log('🔔 Payhip webhook received:', data);

  // You can customize what happens here
  // For now we’ll just confirm it's working
  res.sendStatus(200);
});
sendWhatsApp("✅ Jimmyverse is live and sending WhatsApp messages.");
app.listen(PORT, () => {
  console.log(`✅ Server live on port ${PORT}`);
});
