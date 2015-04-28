var fs = require('fs');

module.exports = function(directory_path, file_type, callback){
  var regex = new RegExp(".*\." + file_type + "$");
  // console.log("regex " + regex);

  fs.readdir(directory_path, function(err, files){
    if(err){
      // console.log("Error in module: " + err);
      callback(err, null);    
    } else {
      result_array = [];
      // console.log("Files: " + files);
      
      
      files.forEach(function(file){
        // console.log("file: " + file);
        if(file.match(regex)){
          // console.log("Matched file: " + file);
          result_array.push(file);
        }
      })
      callback(null, result_array);
    }
  });
}



