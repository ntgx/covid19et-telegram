const axios = require('axios');
const bot = require('../bot');

module.exports = async (msg) => {
  axios.get('https://api.pmo.gov.et/v1/cases').then((res) => {
    const {
      total, recovered, deceased,
    } = res.data[0];
    const text = `በብሔራዊ ባለሥልጣናት እንደተዘገበው\n\nበኢትዮጵያ 🇪🇹\n\n😷 በበሽታው የተያዙ: ${total} \n\n🙂 ያገገሙ: ${recovered}\n\n😢 የሞቱ: ${deceased}`;
    bot.sendMessage(msg.chat.id, text, {
      reply_markup: JSON.stringify({
        inline_keyboard: [[{ text: '🌍 የየሀገሩ ወቅታዊ ቁጥሮች', url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/' }]],
      }),
    });
  }).catch(() => {
    bot.sendMessage(msg.chat.id, 'Something went wrong. Please try again!');
  });
};
