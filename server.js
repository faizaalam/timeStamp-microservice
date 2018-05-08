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
app.get("/", function (request, response) {
  response.send("https://timestamp-ms.herokuapp.com/1450137600");
});
app.get("/", function(req,res){
  res.send('<p>Example usage:</p><code>http://localhost:8080/December%2015,%202015</code><br><code>http://localhost:8080/1450137600</code>');
});

app..

  

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
