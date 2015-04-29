var http = require("http")
var map = require('through2-map')

var port = process.argv[2]

server = http.createServer(function (request, response){
  response.writeHead(200, { 'content-type': 'text/plain' })
  
  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)

})

server.listen(port)


// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
