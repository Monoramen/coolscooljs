require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const TelegramBot = require('node-telegram-bot-api');


// Укажите публичный адрес из ngrok в качестве URL-адреса вебхука
const url = 'https://d61d-184-22-190-71.ngrok-free.app';

const options = {
    webHook: {
      port: 443
    }
  };

// Установите вебхук
const bot = new TelegramBot(token, options);
bot.setWebHook(`${url}/bot${token}`);

// Обработчики событий бота
// Обработчик команды /start

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Выберите действие:', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Программа 📚', callback_data: 'program' },
            { text: 'Место 📍', callback_data: 'place' },
            { text: 'Цена 💰', callback_data: 'price' },
          ],
          [
            { text: 'Задать вопрос 🤔', callback_data: 'question' },
            { text: 'Подать заявку 📝', callback_data: 'myact' },
          ]
        ]
      }
    });
  });
  