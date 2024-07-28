// import thư viện
const { connectToDatabase } = require("./db/connect_database");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const port = 8888;
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
// connect db
connectToDatabase();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// author
app.use("/v1/author", authorRoute);

app.use("/v1/book", bookRoute);
let portCurrent = process.env.PORT || port ; 
app.listen(portCurrent, function () {
  console.log("Listening on port " + port); //Listening on port 8888
});
