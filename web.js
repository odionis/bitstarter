var express = require('express');
var fs = require('fs');
var buff = new Buffer(27);

buff.write(fs.readFileSync('index.html', 'utf-8'), "utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response) 
{
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() 
{
  console.log("Listening on " + port);
});
