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
// Set the folder for blog background images
app.use(express.static(path.join(__dirname, 'img')));
// Set the folder for general images
app.use(express.static(path.join(__dirname, 'images')));
// Set the folder for gallery images
app.use(express.static(path.join(__dirname, 'galleryimg')));
//Set the folder for Node Modules
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/meet', function(req, res) {
  res.render('meet');
});

app.get('/blog', function(req, res) {
  res.render('blog');
});

app.get('/gallery', function(req, res) {
  res.render('gallery');
});

app.get('/press', function(req, res) {
  res.render('press');
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
