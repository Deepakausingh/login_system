const { model } = require("mongoose");
const db = require("../db");
const createUser = (username, password, callback) => {
    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password],
        callback
    );
};

const getUserByUsername = (username, callback) => {
    db.query("SELECT * FROM users WHERE username = ?", [username], callback);
};

module.exports = {createUser, getUserByUsername};
