const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGODB_CON_URL);
    console.log("connected to MongoDB");
  } catch (e) {
    throw e;
  }
};

module.exports = { connectToDb };
