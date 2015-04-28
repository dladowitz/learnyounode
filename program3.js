var fs = require('fs')
var filePath = process.argv[2]

var buffer = fs.readFileSync(filePath)

var stringBuffer = buffer.toString()

var numOfLines = stringBuffer.split("\n").length - 1
console.log(numOfLines)