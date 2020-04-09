const config = require('../config');
const stats = require('../covid19/stats');
const prevention = require('../covid19/prevention');
const faq = require('../covid19/faq');
const myths = require('../covid19/myths');
const travel = require('../covid19/travel');
const news = require('../covid19/news');
const start = require('../covid19/start');

module.exports = (msg) => {
  switch (msg.text) {
    case config.MAIN_KEYBOARD[0][0]:
      stats(msg);
      break;
    case config.MAIN_KEYBOARD[0][1]:
      prevention(msg);
      break;
    case config.MAIN_KEYBOARD[1][0]:
      faq(msg);
      break;
    case config.MAIN_KEYBOARD[1][1]:
      myths(msg);
      break;
    case config.MAIN_KEYBOARD[2][0]:
      travel(msg);
      break;
    case config.MAIN_KEYBOARD[2][1]:
      news(msg);
      break;
    default:
      start(msg);
      break;
  }
};
