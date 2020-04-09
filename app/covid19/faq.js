const jsonfile = require('jsonfile');
const chunk = require('lodash/chunk');
const bot = require('../bot');

module.exports = async (msg, questionIndex) => {
  const faqs = await jsonfile.readFile('./data/faqs.json');
  if (faqs[questionIndex]) { // send answer
    bot.sendMessage(msg.chat.id, faqs[questionIndex].answer, {
      reply_markup: JSON.stringify({
        inline_keyboard: [[{ text: 'ወደ ጥያቄዎች ይመለሱ ❓', callback_data: JSON.stringify({ type: 'faq' }) }]],
      }),
    });
  } else { // send questions
    const questions = faqs.map((q, i) => `${i + 1}) ${q.question}\n\n`).join('');
    const buttons = faqs.map((_, i) => ({ text: `${i + 1}`, callback_data: JSON.stringify({ type: 'faq', questionIndex: i }) }));

    const options = {
      reply_markup: JSON.stringify({
        inline_keyboard: chunk(buttons, 5),
      }),
    };
    bot.sendMessage(msg.chat.id, `ትክክለኛውን መልስ ለማግኘት ቁጥሮቹን ይጫኑ፡\n\n${questions}`, options);
  }
};
