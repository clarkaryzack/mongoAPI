const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

app.set("views", "./views");
app.use(express.static("public"));

mongoose.connect("27017://magic");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});


app.listen(3000);
console.log("Listening on port 3000...");
