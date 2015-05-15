var express = require('express');
var app = express();
var fs = require('fs');

app.get('/progress', function (req, res) {
	var time = req.query.time || 10000;
	
	setTimeout(function () {
		var img = fs.readFileSync('./images/progress.png');
		res.writeHead(200, {'Content-Type': 'image/png' });
		res.end(img, 'binary');
	}, time);
});

app.get('/', function (req, res) {
	var html = '';
	
	for (var i=0; i<10; i++) { html += '<img height="10" width="50" src="/progress?time=' + (i*1000) + '">'; }
	
	html += '<br><br>';
	
	//for (var i=0; i<10; i++) { html += '<img height="10" width="50" src="/progress?time=' + (i*300) + '">'; }
	
	html += '<br><br>';
	
	//for (var i=0; i<10; i++) { html += '<img height="10" width="50" src="/progress?time=' + (i*1000) + '">'; }
	
	res.send(html);
});

var server = app.listen(4567, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});