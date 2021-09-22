const express = require("express");
const path = require("path");

const PORT = 3001;

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("public/index.html");
});

app.listen(PORT, () => {
    console.log(`Browser test backend listening at http://localhost:${PORT}`);
});