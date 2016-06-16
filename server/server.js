var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3030, function(){
	console.log('listening on port 3030');
});