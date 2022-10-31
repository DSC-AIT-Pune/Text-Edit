const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose.connect(process.env.MongoURI, (err) => {
    if (err) throw err;
    console.log(">Connected...");
  });
};

module.exports = connectDB;
