function callback (err, data) { /* ... */ }

var fs = require('fs');
var file_path = process.argv[2];
// console.log(file_path)

fs.readFile(file_path, 'utf8', function logMyNumber (err, fileContents){
  if(err){
    console.log("-----------------ERROR-----------------");
    console.log(err);
    console.log("-----------------ERROR-----------------");
  } else {
    // console.log(fileContents);
    var lines = fileContents.split("\n");
    // console.log(lines);
    console.log(lines.length - 1);
  }
});



// var stringed_file_contents = buffered_file_contents.toString();
// // console.log(stringed_file_contents)

// var lines_array = stringed_file_contents.split("\n");
// // console.log(lines_array)

// var num_of_lines = lines_array.length;
// console.log(num_of_lines - 1);

// var fs = require('fs')
// var myNumber = undefined
// var myNumber2 = undefined

// function addOne(file, callback, order_number){
//   fs.readFile(file, function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents);
//     myNumber++;
//     callback(myNumber, order_number);
//   });
// };

// function logMyNumber(number, order_number){
//   console.log("Order number " + order_number + " up: " + number); 
// };


// console.log('order 1 starting')
// addOne('number.txt',logMyNumber, 1)
// console.log('order 1 waiting')

// console.log('order 2 starting')
// addOne('number2.txt', logMyNumber, 2)
// console.log('order 2 waiting')
