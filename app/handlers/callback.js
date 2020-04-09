const faq = require('../covid19/faq');

module.exports = (callbackQuery) => {
  const data = JSON.parse(callbackQuery.data);
  const msg = callbackQuery.message;

  switch (data.type) {
    case 'faq':
      faq(msg, data.questionIndex);
      break;
    default:
      break;
  }
};
