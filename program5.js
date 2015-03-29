var fs = require('fs');
var directory_path = process.argv[2];
var file_type = process.argv[3];
var debug = process.argv[4];

if (debug) console.log("file type: " + file_type);

var regex = new RegExp(".*\." + file_type + "$");
if (debug) console.log("regex " + regex);

function printError(error){
  console.log("-----------------ERROR-----------------");
  console.log(error);
  console.log("-----------------ERROR-----------------");
}

fs.readdir(directory_path, function callback (err, list){
  if(err){
    printError(err);    
  }else{
    if (debug) console.log("list: " + list);

    list.forEach(function(file){
      if (debug) console.log("file: " + file);

      if(file.match(regex)){
        if (debug) console.log("matched!");        
        console.log(file);
      }
    })
  }
})
