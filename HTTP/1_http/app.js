var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', 3000);

var data = [
  {"firstName": "Jeff", "lastname": "Winger"},
  {"firstName": "Troy", "lastname": "Barnes"},
  {"firstName": "Britta", "lastname": "Perry"},
  {"firstName": "Abed", "lastname": "Nadir"}
];

app.get('/users', function(req, res) {
	console.log('get');
    res.send(data);
});
app.post('/users', function(req, res) {
	console.log('post');
	res.send(req.body);
});

// run server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
