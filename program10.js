var net  = require("net")
var port = process.argv[2]
var strftime = require('strftime') 

var server = net.createServer(function (socket) { 
  var dateTime = strftime("%F %H:%M", new Date())
  socket.write(dateTime);
  socket.end();
})

server.listen(port)
