var db = require("../bin/mysql");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config/env');

module.exports = class usersModel {

    getUserById(userId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id LIKE ?", [userId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result[0]);
            })
        })
    }

    getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE username LIKE ?", [username], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result[0]);
            })
        })
    }

    newUser(user) {
        const password = bcrypt.hashSync(user.password, 10);
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO users (username, password, firstname, lastname) VALUES (?, ?, ?, ?)",
            [user.username, password, user.firstname, user.lastname],
            (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    generateJWT(id) {
        const jwtPayload = { id };
        const jwtSecret = config.jwt.jwtSecret;
        const jwtData = {
            expiresIn: config.jwt.jwtDuration
        };
        return jwt.sign(jwtPayload, jwtSecret, jwtData);
    }

    comparePasswords(userPassword, password) {
        return bcrypt.compareSync(password, userPassword);
    }
}
