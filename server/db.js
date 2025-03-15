const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Deepak@2002",
    database: "login",
});

db.connect((err) => {
    if (err) throw err;
    console.log("mysql connected");
});

module.exports = db;