const moment = require("jalali-moment");

function now(date = Date.now()) {
  return moment().locale("fa").format("YYYY/MM/DD HH:mm:ss");
}

module.exports = now;
