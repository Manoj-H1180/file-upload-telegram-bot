const { Telegraf } = require("telegraf");
const fs = require("fs");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

// Replace with your Telegram bot's API token
const token = process.env.token;

const bot = new Telegraf(token);

bot.command("upload", async (ctx) => {
  const fileId = ctx.message.document.file_id;
  const fileLink = await bot.telegram.getFileLink(fileId);
  ctx.replyWithHTML(
    `Here's the link to your file: <a href="${fileLink}">${fileLink}</a>`
  );
});

bot.launch();
