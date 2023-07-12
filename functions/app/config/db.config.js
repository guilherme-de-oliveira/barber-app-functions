// const uri = "mongodb+srv://guihenriqueoliveira:<password>@cluster0.llqxbbl.mongodb.net/?retryWrites=true&w=majority";

require('dotenv').config();

console.log(process.env.MONGO_USER)
// const mongo = JSON.parse(process.env.MONGO)
// const mongo = process.env.MONGO
// console(process.env.MONGO_USER)
console.log("Hello logs op2a EU!");
module.exports = {
    USER: process.env.MONGO_USER,
    PWD: process.env.MONGO_PWD,
    HOST: process.env.MONGO_CLUSTER,
    DB: process.env.MONGO_DBNAME
};