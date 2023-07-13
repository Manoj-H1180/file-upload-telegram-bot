const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
require("dotenv").config();

// Replace the value below with the Telegram token you receive from @BotFather
const token = process.env.token;

// Replace the value below with the URL of your backend API
const backendUrl = process.env.url;

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for messages
bot.on("message", (msg) => {
  // Send the message to the backend API
  switch (msg.text) {
    case "Hi":
      bot.sendMessage(
        msg.chat.id,
        `Hello, ${msg.from.first_name}! Please send a video file to download or stream.`
      );
      break;
    case "hi":
      bot.sendMessage(
        msg.chat.id,
        `Hello, ${msg.from.first_name}! Please send a video file to download or stream.`
      );
      break;
    case "Hello":
      bot.sendMessage(
        msg.chat.id,
        `Hello, ${msg.from.first_name}! Please send a video file to download or stream.`
      );
      break;
    case "hello":
      bot.sendMessage(
        msg.chat.id,
        `Hello, ${msg.from.first_name}! Please send a video file to download or stream.`
      );
      break;
    case "/account":
      bot.sendMessage(
        msg.chat.id,
        `Hello, Please click this link to Login, ${"https://test.com"}.`
      );
      break;
    case "/files":
      bot.sendMessage(
        msg.chat.id,
        `Hello, ${msg.from.first_name}! Please send a video file to download or stream.`
      );
      break;
    default:
      break;
  }

  

  if (msg.video) {
    // Handle video files
    axios
      .post(backendUrl, {
        fileName: msg.video.file_name,
        mimeType: msg.video.mime_type,
        fileId: msg.video.file_id,
        fileUniqueId: msg.video.file_unique_id,
        fileSize: msg.video.file_size,
      })
      .then((response) => {
        console.log("Video sent to backend API:");
      })
      .catch((error) => {
        console.error("Error sending video to backend API:", error);
      });
  } else if (msg.document) {
    // Handle document files
    axios
      .post(backendUrl, {
        fileName: msg.document.file_name,
        mimeType: msg.document.mime_type,
        fileId: msg.document.file_id,
        fileUniqueId: msg.document.file_unique_id,
        fileSize: msg.document.file_size,
      })
      .then((response) => {
        console.log("Document sent to backend API:");
      })
      .catch((error) => {
        console.error("Error sending document to backend API:", error);
      });
  } else if (msg.audio) {
    // Handle audio files
    axios
      .post(backendUrl, {
        fileName: msg.audio.file_name,
        mimeType: msg.audio.mime_type,
        fileId: msg.audio.file_id,
        fileUniqueId: msg.audio.file_unique_id,
        fileSize: msg.audio.file_size,
      })
      .then((response) => {
        console.log("Audio sent to backend API:");
      })
      .catch((error) => {
        console.error("Error sending audio to backend API:", error);
      });
  }
});
