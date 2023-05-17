const TelegramBot = require('node-telegram-bot-api');
const token = '5861953499:AAHOSNaGSk9m2tQp1Ozz_vmARxT9HPh2xD4';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет, я эхо-бот. Я буду повторять все сообщения, которые ты мне отправишь.');
    });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, msg.text);
    });
    