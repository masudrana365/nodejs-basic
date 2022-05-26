/**Here is require path */
const path = require("path");
const myPath = "E:/Node JS/path.js";

console.log(path.basename(myPath));
 // return file name: path.js

 console.log(path.delimiter); 
//return ;(semicolon) for Windows & : (colon) for POSIX 

console.log(path.dirname(myPath)); 
//returns the directories of a file path: E:/Node JS

console.log(path.extname(myPath)); 
//returns the extension of a file path: .js

//Create a path object:
const obj = { dir: "E:\Node JS", base: "path.js" }
//Format the path object into a path string:
console.log(path.format(obj));

console.log(path.parse(myPath)); 
// Returns: root, dir, base, ext, file name

 
