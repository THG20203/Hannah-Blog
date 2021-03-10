//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();

//for the purpose of ejs.
app.set('view engine', 'ejs');

//                 SETTING THE FILE PATHS FOR CSS/IMAGES
// Set the folder for css
app.use(express.static(path.join(__dirname, 'css')));
// Set the folder for images
app.use(express.static(path.join(__dirname, 'images')));
//Set the folder for Node Modules
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/portal', function(req, res) {
  res.render('portal');
});

app.get('/reasons', function(req, res) {
  res.render('reasons');
});

//Tune into port for Heroku
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

// Tune into port 3000
app.listen(port, function() {
  console.log("Server has started succesfully");
});
