const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
require("dotenv").config();
const backend = express();
const http = require("http").Server(backend);
const routes = require("./routes")

//step1
backend.use(express.json());

//step2
backend.use(cors({
    origin: "*",
    methods : ["GET", "PUT", "PATCH", "POST", "DELETE"]
})
);

//step4
backend.use(routes)


mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    console.log(chalk.green("✓ DB is connected with Backend"));
    const PORT = process.env.PORT
    http.listen(PORT, () => {
        console.log(chalk.cyan(`Server is listening on port ${PORT}`));
    });
})
.catch((error) => {
    console.error(chalk.red("Error connecting to DB:", error));
});

backend.get("/", (req, res) => {
    res.send("Welcome to the Backend Server!");
});

module.exports = backend;