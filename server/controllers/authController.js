const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    User.createUser(username, hashedPassword, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "User registered successfully!" });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    User.getUserByUsername(username, async (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length > 0) {
            const validPassword = await bcrypt.compare(password, results[0].password);
            if (validPassword) {
                res.json({ message: "Login successful!" });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });
};
