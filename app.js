//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var liveServer = require("live-server");

const app = express();

//middleware- server to website
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Server started port 4000");
});
