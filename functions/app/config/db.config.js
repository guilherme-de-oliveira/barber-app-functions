require('dotenv').config();

module.exports = {
    USER: process.env.MONGO_USER,
    PWD: process.env.MONGO_PWD,
    HOST: process.env.MONGO_CLUSTER,
    DB: process.env.MONGO_DBNAME
};