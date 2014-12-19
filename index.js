var express   = require('express');
var app       = express();
var swig      = require('swig');
var http      = require('http');
var url       = require('url');
var cons      = require('consolidate');
var path      = require('path');
var bootstrap = require('./routes');

module.exports = function(options) {

  // make sure there's a path
  if(!options.root) {
    var options = {
      root: __dirname
    }
  }
  
  // set swig as templating engine
  app.use('/assets', express.static(options.root + '/assets'));
  app.engine('html', cons.swig);
  app.set('view engine', 'html');
  app.set('views', options.root + '/../../');

  // make routes, add content, etc.
  bootstrap(app);

  // create server
  return app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });
  
}
