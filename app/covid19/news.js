const bot = require('../bot');

module.exports = (msg) => {
  const text = 'ስለበሽታው ዘገባዎች: የበሽታው ዘገባዎች ስለ ኖቭል ኮሮና ቫይረስ ወቅታዊ የሆነውን መረጃ ያቀርባል https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/\n\nከየአቅጣጫው ያሉ ዘገባዎች: ስለኮቪድ-19 ከዓለም የጤና ድርጅት መገናኛ ብዙኃን የተወሰዱ፤ ከየአቅጣጫው የተገኙ መረጃዎች https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen\n\nየዜና መጣጥፎች: አጠቃላይ ዜናዎች, መግለጫዎች እና ማስታወሻዎች https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/news\n\nጋዜጣዊ መግለጫዎች: ስለ ኮቪድ-19 ጋዜጣዊ መግለጫዎች ቪዲዮዎች ድምጵዎች እና መግለጫዎች https://www.who.int/emergencies/diseases/novel-coronavirus-2019/media-resources/press-briefings';
  bot.sendMessage(msg.chat.id, text, { disable_web_page_preview: true });
};
