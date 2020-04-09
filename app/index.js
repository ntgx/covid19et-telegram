const bot = require('./bot');
const command = require('./handlers/command');
const message = require('./handlers/message');
const callback = require('./handlers/callback');

bot.on('text', (msg) => {
  if (/\/\w+/.exec(msg.text)) command(msg);
  else message(msg);
});

bot.on('callback_query', callback);
