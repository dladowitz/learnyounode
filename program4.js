var fs = require('fs');
var filePath = process.argv[2]

function doneReading(err, fileContents){
  var buffer = fileContents;
  var stringBuffer = buffer.toString();
  var numberOfLines = stringBuffer.split("\n").length - 1;
  console.log(numberOfLines)
}

fs.readFile(filePath, doneReading);