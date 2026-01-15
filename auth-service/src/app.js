const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const authRoutes = require("./routes/authsRoute");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Auth service is running");
});

mongoose
    .connect(config.mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use("/auth", authRoutes);

module.exports = app;