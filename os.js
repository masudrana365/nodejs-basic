const os = require("os");

console.log(os.platform());
//Returns information about the operating system's platform

console.log(os.arch());
//Returns the operating system CPU architecture

console.log(os.homedir());
//Returns the string path of the current user's home directory.

console.log(os.hostname());
//Returns the hostname of the operating system

console.log(os.freemem());
//Returns the amount of free system memory in bytes as an integer.