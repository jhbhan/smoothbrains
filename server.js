const express = require("express");
const http = require("http");
const port = 8080;

var app = express();

function handler(req, res) {
    let url = req.url;
    console.log(`request ${url}`);
    res.send("You requested " + url);
}

function loginhandler(req, res) {
    console.log("hello");
    res.redirect("./login.html");
}
app.get("/login", loginhandler);

app.get("/*", handler);

app.listen(port, function () {
    console.log(`Listening on ${port}...`);
});
