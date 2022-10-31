const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuerySchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const Query = mongoose.model("queries", QuerySchema);
module.exports = Query;
