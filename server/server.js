const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use("/auth", authRoutes);

// Serve index.html for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
