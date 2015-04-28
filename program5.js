var fs = require("fs")
var path = require('path')
var dirPath = process.argv[2]
var extenstion = "." + process.argv[3]

function callback (err, list) { 
  list.forEach(function(file){
    if(path.extname(file) === extenstion){
      console.log(file)
    }
  })
}


fs.readdir(dirPath, callback)