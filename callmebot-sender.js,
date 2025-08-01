const axios = require("axios");

async function sendMessage(phoneNumber, messageText) {
  try {
    const apiKey = "3948874"; // Your CallMeBot API key
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodeURIComponent(
      messageText
    )}&apikey=${apiKey}`;

    const response = await axios.get(url);
    console.log("WhatsApp message sent:", response.data);
  } catch (error) {
    console.error("Error sending WhatsApp message:", error.message);
  }
}

module.exports = sendMessage;
