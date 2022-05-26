const fs = require("fs");

//write file name and add data
 fs.writeFileSync("myFile.txt", "This is my first file\n");
 fs.appendFileSync("myFile.txt", "Added second file");

//read the file
const data = fs.readFileSync("myFile.txt");
// return binary format data
console.log(data);

//return string data for apply toString method
console.log(data.toString())

//This is asynchronous way so late display
fs.readFile("myFile.txt", () => {
    console.log(data.toString());

})

console.log("this is display before from the asynchronous way ")