var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var body = 'Hello World!';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Lenght', body.length);
	res.end(body);
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server at port: ' + port);