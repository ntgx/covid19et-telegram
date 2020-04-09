const bot = require('../bot');
const start = require('../covid19/start');

module.exports = (msg) => {
  const chatId = msg.chat.id;

  switch (msg.text) {
    case '/start':
      start(msg);
      break;
    default:
      bot.sendMessage(chatId, 'Unknown command');
      break;
  }
};
