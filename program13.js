var http = require("http");
var url  = require('url');

var port = process.argv[2]

server = http.createServer(function (request, response){
  response.writeHead(200, { 'Content-Type': 'application/json' })

  var url_object = url.parse(request.url, true)
  var pathname   = url_object["pathname"]
  var date    = new Date(url_object.query.iso)

  if (pathname == "/api/parsetime"){
    response.end(JSON.stringify({"hour": date.getHours(),"minute": date.getMinutes(),"second": date.getSeconds()}));

  } else if (pathname == "/api/unixtime"){
    response.end(JSON.stringify({"unixtime": date.getTime(date)}));
  } else {
    response.body = "unknows path"
  }


})

server.listen(port)



// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))