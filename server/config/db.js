const mongoose = require("mongoose");
const MongoURI = `mongodb://localhost:27017`;

const connectDB = () => {
  mongoose.connect(MongoURI, (err) => {
    if (err) throw err;
    console.log(">Connected...");
  });
};

module.exports = connectDB;
