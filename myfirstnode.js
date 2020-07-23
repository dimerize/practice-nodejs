var http = require('http');
var date = require('./module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The current date is " + date.myDateTime());
  res.end();
}).listen(8080);