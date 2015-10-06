var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', (req, res) => {
	// res.sendFile(path.join(__dirname + 'index.html'));
	res.render('index', { title: 'Hey', message: 'Hello, welcome to jade...'});
});

var server = app.listen(7777, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('app is listening at http://%s:%s/', host, port);
})