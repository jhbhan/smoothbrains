const express = require("express");
const http = require("http");
const port = 5502;
const sqlite3 = require("sqlite3");
const dbFileName = "data.db";
const db = new sqlite3.Database(dbFileName);

//db.get returns only one
//db.all returns all query and runs the callback after
//db.each returns all query and runs callback each time

var app = express();

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true); // If needed

    next();
});

function handler(req, res) {
    let url = req.url;
    console.log(`request ${url}`);
    res.send("You requested " + url);
}

function loginhandler(req, res) {
    console.log("hello");
    var code = req.query.usercode;
    let cmd = 'SELECT * FROM Brains where usercode="' + code + '";';
    console.log(cmd);
    db.all(cmd, countCallback);

    function countCallback(err, rowdata) {
        console.log("in count callback");
        if (err) {
            console.log(err);
        } else {
            if (rowdata != undefined) {
                console.log(rowdata);
                res.json(rowdata);
            } else {
                console.log("no data");
                initiateBrains(code);
            }
        }
    }
}
app.get("/login", loginhandler);

app.get("/*", handler);

app.listen(port, function () {
    console.log(`Listening on ${port}...`);
});

function initiateBrains(usercode) {
    let cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Ben", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Justin", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Jason", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Jacob", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Robin", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Eric", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Addison", 5)';
    db.run(cmd, initiateCallback);
    cmd =
        'INSERT INTO Brains (usercode , name  , score) Values ("boba", "Jeremiah", 5)';
    db.run(cmd, initiateCallback);

    console.log(cmd2);
    function initiateCallback(err) {
        console.log("callback");
        if (err) {
            console.log(err);
        }
        return;
    }

    console.log(cmd2);
    let cmd2 = 'SELECT * FROM Brains where usercode="' + usercode + '";';
    console.log(cmd2);
    db.all(cmd2, returnCallback);
    function returnCallback(err, rowdata) {
        console.log("in count callback");
        if (err) {
            console.log(err);
        } else {
            console.log(rowdata);
            if (rowdata != undefined) {
                console.log(rowdata);
            } else {
                console.log("uhoh bad");
            }
        }
    }
}
