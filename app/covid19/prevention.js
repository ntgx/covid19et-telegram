const bot = require('../bot');

module.exports = async (msg) => {
  const text = 'እራስዎን ይጠብቁ\n\n🧼 እጅዎን ቶሎ ቶሎ ይታጠቡ\n\n👄 አይንዎን አፍንጫዎን እና አፍዎን ከመንካት ይቆጠቡ\n\n💪 በሚያስነጥሱበት እና በሚያስሉበት ጊዜ አፍዎን እና አፍንጫዎን በክንድዎ ወይም በሶፍት ይሸፍኑ\n\n🏠 የህመም ስሜት ካሎት እቤትዎ ይቆዩ- መጠነኛ የሆነ ሳል እና ትኩሳት ቢሆን እንኳን\n\n🤒ትኩሳት ሳል እና መተንፈስ ከከበዶት በቶሎ ህክምና ያግኙ- አስቀድመው ግን በስልክዎ ያሳውቁ';
  await bot.sendMessage(msg.chat.id, text, {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: 'ቪድዮ ይመልከቱ 🎦', url: 'https://youtu.be/8c_UJwLq8PI' }]],
    }),
  });
};
