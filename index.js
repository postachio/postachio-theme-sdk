var express   = require('express');
var app       = express();
var swig      = require('swig');
var http      = require('http');
var url       = require('url');
var cons      = require('consolidate');
var path      = require('path');
var bootstrap = require('./routes');

// set swig as templating engine
app.use('/assets', express.static(__dirname + '/../../assets'));
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/../../');

// make routes, add content, etc.
bootstrap(app);

// create server
var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = server;
