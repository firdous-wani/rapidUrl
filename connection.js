const mongoose = require("mongoose");

async function connecToDB(url) {
  return mongoose.connect(url);
}

module.exports = {
  connecToDB,
};
