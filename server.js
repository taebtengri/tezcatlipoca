var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require('cors');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(cors());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "/public/main.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/public', express.static('public'));

app.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

