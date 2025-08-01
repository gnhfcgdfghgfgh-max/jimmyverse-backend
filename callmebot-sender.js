const axios = require('axios');

async function sendWhatsApp(message) {
  const apiKey = '3948874'; // your CallMeBot API key
  const phoneNumber = '14017196966'; // your WhatsApp number
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&apikey=${apiKey}&text=${encodeURIComponent(message)}`;

  try {
    const response = await axios.get(url);
    console.log('WhatsApp sent:', response.data);
  } catch (error) {
    console.error('Error sending WhatsApp:', error.message);
  }
}

module.exports = sendWhatsApp;
