var fs = require('fs');
// var file_path = process.argv[2];
// console.log(file_path)

// var buffered_file_contents = fs.readFile(file_path, );
// // console.log(buffered_file_contents)

// var stringed_file_contents = buffered_file_contents.toString();
// // console.log(stringed_file_contents)

// var lines_array = stringed_file_contents.split("\n");
// // console.log(lines_array)

// var num_of_lines = lines_array.length;
// console.log(num_of_lines - 1);

var fs = require('fs')
var myNumber = undefined
var myNumber2 = undefined

function addOne(file, callback, order_number){
  fs.readFile(file, function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents);
    myNumber++;
    callback(myNumber, order_number);
  });
};

function logMyNumber(number, order_number){
  console.log("Order number " + order_number + " up: " + number); 
};


console.log('order 1 starting')
addOne('number.txt',logMyNumber, 1)
console.log('order 1 waiting')

console.log('order 2 starting')
addOne('number2.txt', logMyNumber, 2)
console.log('order 2 waiting')
