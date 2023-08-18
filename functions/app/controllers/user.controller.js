const db = require("../models");
const User = db.user;

async function getByName(param) {
    return new Promise((resolve) => {
        User.find({
            role: 'barber',
            username: new RegExp(param, 'i'),
        }, 
        'username email phoneNumber'
        ).exec((err, users) => {
            if (err) {
                resolve([{ message: err }]);
            }

            if (users.length === 0) {
                resolve([{ message: 'User Not found.'}]);
            }

            resolve(users);
        })
    })

}

module.exports = {
    getByName
}