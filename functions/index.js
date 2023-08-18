const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

const db = require("./app/models");
const dbConfig = require("./app/config/db.config");

var corsOptions = {
  "origin": "*",
  "methods": "GET,POST",
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/index.routes')(app);

db.mongoose.set("strictQuery", true);

db.mongoose
  .connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PWD}@${dbConfig.HOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    logger.info("Successfully connect to MongoDB.");
  })
  .catch(err => {
    logger.info("Connection error", err);
    process.exit();
  });

exports.app = functions.https.onRequest(app);