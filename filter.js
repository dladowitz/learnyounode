var fs = require("fs")
var path = require('path')

module.exports = function(dirPath, extenstion, callback) { 
  var files = []
  fs.readdir(dirPath, function(err, list){
    if(err){
       callback(err, null); 
    } else {
      list.forEach(function(file){
        if(path.extname(file) === extenstion){
          files.push(file);
        };
      }); 

      callback(null, files);         
    }   
  });
};