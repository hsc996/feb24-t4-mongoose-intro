const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extrended:true}));

//app.verb(path, callback);
app.get("/", (request, response) => {
    response.send("Hello, world!");
});

module.exports = { app }