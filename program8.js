var http = require("http"); 
var bl   = require("bl")
var url  = process.argv[2];

http.get(url, function (response){
  response.setEncoding('utf8');
  
  response.pipe(bl(function (err, data) {
    responseData = data.toString()
    console.log(responseData.length)
    console.log(responseData)    
  }))
})


