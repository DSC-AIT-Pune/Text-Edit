const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

var app = express();
var PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/ask", require("./routes/query"));

app.listen(PORT, () => {
  console.log(`Server Running.. http://localhost:${PORT}`);
});
