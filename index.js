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

  const customerEmail = data.customer_email || 'unknown email';
  const productName = data.product_name || 'unknown product';
  const amount = data.total || 'unknown amount';

  const message = `💸 NEW SALE!\nProduct: ${productName}\nCustomer: ${customerEmail}\nAmount: ${amount}`;
  sendWhatsApp(message);

  res.sendStatus(200);
});
  // You can customize what happens here
  // For now we’ll just confirm it's working
  res.sendStatus(200);
});
sendWhatsApp("✅ Jimmyverse is live and sending WhatsApp messages.");
app.listen(PORT, () => {
  console.log(`✅ Server live on port ${PORT}`);
});
