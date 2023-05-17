require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = {
      resize_keyboard: true,
      one_time_keyboard: true,
      keyboard: [
        ['Программа 📚', 'Место 📍'],
        ['Цена 💰', 'Задать вопрос 🤔'],
        ['Подать заявку 📝']
      ]
    };
    
    bot.sendMessage(chatId, 'Выберите действие:', {
      reply_markup: JSON.stringify(keyboard)
    });
  });
  
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
  
    // Обработка выбора кнопок
    switch (text) {
      case 'Программа 📚':
        // Действия при выборе кнопки "Программа"
        break;
      case 'Место 📍':
        // Действия при выборе кнопки "Место"
        break;
      case 'Цена 💰':
        // Действия при выборе кнопки "Цена"
        break;
      case 'Задать вопрос 🤔':
        // Действия при выборе кнопки "Задать вопрос"
        break;
      case 'Подать заявку 📝':
        // Действия при выборе кнопки "Подать заявку"
        break;
      default:
        // Действия при получении другого текстового сообщения
        break;
    }
  });
  