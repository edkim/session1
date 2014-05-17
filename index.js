var express = require("express");
var ejs = require("ejs");
var app = express();

app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(3000);