var db = require("../bin/mysql");

module.exports = class usersModel {

    getTaskById(userId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id LIKE ?", [userId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    newUser(user) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO users (username, password, firstname, lastname) VALUES (?, ?, ?, ?)", [user.username, user.password, user.firstname, user.lastname], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
}