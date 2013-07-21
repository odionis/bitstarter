var express = require('express');
var fs = require('fs');
var buff = new Buffer(1000000);

buff.write(fs.readFileSync('index.html', 'utf-8'), "utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response) 
{
  response.send(buff.toString());
});

app.get('/beach.jpg', function(request, response)
{
	var img = fs.readFileSync('./beach.jpg');
    response.writeHead(200, {'Content-Type': 'image/jpg' });
    response.end(img, 'binary');
});

app.get('/judith.jpg', function(request, response)
{
	var img = fs.readFileSync('./judith.jpg');
    response.writeHead(200, {'Content-Type': 'image/jpg' });
    response.end(img, 'binary');
});

var port = process.env.PORT || 8080;
app.listen(port, function() 
{
  console.log("Listening on " + port);
});
