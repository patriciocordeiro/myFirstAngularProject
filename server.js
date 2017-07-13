'use strict';
//load packages
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = 3000;
app.set('port', process.env.PORT || port);
//var io = require('socket.io')(server);
//var mongoose = require('mongoose');
//var cors = require('cors');
//var bodyParser = require('body-parser');
//var session = require('express-session');
var path = require('path');


/*-------------------------pap-------------------------------------*/

/*Express config*/
//app.use(cors());
//app.use(bodyParser.json());

//
//app.use(bodyParser.urlencoded({
//	extended: false
//})); // get information from html forms
//use static files
app.use(express.static(path.join(__dirname, './www')));



app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + 'index.html'));
});


server.listen(process.env.PORT || port, function () {
	console.log('App listening on port ' + port);
});