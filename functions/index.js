const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// console.log(`Hello ${process.env.PORT} and`);
// ldsahdlsajldkasjldska
logger.info("Hello logs opa!", {structuredData: true});
const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();

const db = require("./app/models");
// const Role = db.role;
logger.info("Hello logs op2a!", {structuredData: true});
const dbConfig = require("./app/config/db.config");

var corsOptions = {
  origin: "*"
};

app.get('/test', (req, res) => {
    console.log('agr vai2???')
    res.send('agr vai?')
})

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/index.routes')(app);


// set port, listen for requests
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

// app.use('/', (req, res) =>  {
//   if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
//     console.log('1111')
//     res.sendFile(path.resolve(`public/${req.url}`));
//   } else {
//     console.log('2222')
//     res.sendFile(path.resolve('public/index.html'));
//   }
// });

db.mongoose.set("strictQuery", true);

db.mongoose
  .connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PWD}@${dbConfig.HOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    logger.info("Connection error", err);
    process.exit();
  });
  logger.info("vamos?", {structuredData: true});
  exports.app = functions.https.onRequest(app);