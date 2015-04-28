// var filter = require('./filter')
// var dirPath = process.argv[2]
// var extenstion = "." + process.argv[3]


// function callback(err, filesArray) { 
//   if(err){
//     console.log(err)  
//   } else {
//     filesArray.forEach(function(file){
//       console.log(file)    
//     })
//   }
// }


// filter(dirPath, extenstion, callback)



var filterModule = require('./filterfiles.js')
var directory_path = process.argv[2];
var file_type = process.argv[3];


var callback = function(err, files){
  if(err){
    // console.log("Error from program6: " + err);
  } else {
    // console.log("files in program6 callback: " + files)
    files.forEach(function(file){
      console.log(file);
    })
  }
};

filterModule(directory_path, file_type, callback);