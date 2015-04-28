var filter = require('./filter')
var dirPath = process.argv[2]
var extenstion = "." + process.argv[3]

function callback(err, filesArray) { 
  if(err){
    console.log(err)  
  } else {
    filesArray.forEach(function(file){
      console.log(file)    
    })
  }
}

filter(dirPath, extenstion, callback)