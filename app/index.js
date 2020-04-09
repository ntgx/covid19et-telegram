const bot = require('./bot');

bot.on('text', (msg) => {
  bot.sendMessage(msg.chat.id, 'Message recieved');
});
