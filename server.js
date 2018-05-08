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
var whoAmi = {"ipaddress":null,"language":null,"software":null};
// app.get("/", function (request, response) {
//   response.send("https://timestamp-ms.herokuapp.com/1450137600");
// });
app.get("/", function(req,res){
  res.send(result);
});

app.get("/api/whoami", function(req,res){
 res.send(req.headers['accept-language'],req.connection.remoteAddress);
});
app.get('/:date([0-9]*)',function(req,res){
  var timeStamp = parseInt(req.params.date);
  var newD = new Date(timeStamp * 1000);
  result.unix = timeStamp;
  result.natural = (months[newD.getMonth()]) + ' ' + newD.getDate() + ',' + newD.getFullYear();  
  res.send(result);  
});

app.get('/:natString([a-zA-Z]*)',function(req,res){

    var timeStamp = req.params.natString;
    result.natural = timeStamp;
    
   var newD = timeStamp.split(" ");
  if(months.indexOf(newD[0]) > -1 ){
    var month = months.indexOf(newD[0]);
    var day = newD[1].replace(',', '');
    var year = newD[2];
    
    var natDate = new Date(year,month,day);
    var tt = natDate.getTime();
    result.unix = tt /1000;
    
  }
  
    res.send(result);
  
});

  

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
