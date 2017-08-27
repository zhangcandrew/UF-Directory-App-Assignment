var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData = require('./listings.json');

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url); 
    
  if (request['method'] == 'GET' && parsedUrl.pathname == '/listings'){
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(listingData));
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Bad gateway error");
    response.end();
  }
};

var server = http.createServer(requestHandler);
server.listen(port, function(){
  console.log("server listening on: http://localhost:" + port);
});

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});
