var fs = require('fs');
var file_path = process.argv[2];
// console.log(file_path)

var buffered_file_contents = fs.readFileSync(file_path);
// console.log(buffered_file_contents)

var stringed_file_contents = buffered_file_contents.toString();
// console.log(stringed_file_contents)

var lines_array = stringed_file_contents.split("\n");
// console.log(lines_array)

var num_of_lines = lines_array.length;
console.log(num_of_lines - 1);
