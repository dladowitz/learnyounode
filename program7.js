var http = require("http");
var url = process.argv[2];

http.get(url, function callback (response) { 
  // console.log('STATUS: ' + response.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(response.headers));
  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log(data);
  });
})