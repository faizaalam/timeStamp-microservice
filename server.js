// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var result = {'unix': null, 'natural': null};
app.get("/", function (request, response) {
  response.send("https://timestamp-ms.herokuapp.com/1450137600");
});
app.get("/", function(req,res){
  res.send('<p>Example usage:</p><code>http://localhost:8080/December%2015,%202015</code><br><code>http://localhost:8080/1450137600</code>');
});

app.get('/:date([0-9]*)',function(req,res){
  var timeStamp = parseInt(req.params.date);
  var newD = new Date(timeStamp * 1000);
  result.unix = timeStamp;
  result.natural = months[newD.getMonth] + ' ' + newD.getDate() + ',
  
});

app.get('/:natString([a-zA-Z]*)',function(req,res){
  if(req.params.natString)
});

  

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
