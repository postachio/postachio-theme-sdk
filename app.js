var swig = require('swig');
var http = require('http');

// dummy content for testing purposes
var dummy = {
  pagename: 'awesome',
  authors: ['Paul', 'Jim', 'Jane']
};

swig.setFilter('format_date', function(input, id) {
  return '2014-11-10';
});

swig.setFilter('format_tag', function(input, id) {
  return 'tag';
});

var app = http.createServer(function(req, res) {
  
  // render a template to html
  var template = swig.renderFile('theme.html', dummy);
  
  // write it out
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(template);
  
});

app.listen(8000);

console.log('Listening on port 8000...');

