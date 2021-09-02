let fs = require("fs");
let path = require('path');
// let content = fs.readFileSync("f1.txt", "utf-8");
// console.log(content)

// fs.writeFileSync("abc.txt", "My name is Aftab");

// fs.writeFileSync("abc.txt", "My name is Aftab. I am the Boss.");

// fs.appendFileSync("abc.txt", " Hakuna Matata");

// fs.unlinkSync("misc.txt");

// fs.mkdirSync("pathModule"); // create a folder
// fs.rmdirSync("pathModule"); // delete a folder

// let doesExist = fs.existsSync("f1.txt");
// console.log("f1.txt file Exist = " , doesExist);

// StatusObj of file/folder
// let statusObj = fs.lstatSync("fs.js");
// console.log("fs.js is File : " , statusObj.isFile());
// console.log("fs.js is folder : " , statusObj.isDirectory());

// Read a whole folder
// let fileArr = fs.readdirSync("E:\\PepCodingprog\\file_organiser\\dir");
// console.log(fileArr);

// Copy file data from source to dest
let scPath = 'E:\\PepCodingprog\\file_organiser\\fsModule\\f1.txt';
// let destPath = 'E:\\PepCodingprog\\file_organiser\\fsModule\\f2.txt';
let toBeCopiedFileName = path.basename(scPath);
console.log(toBeCopiedFileName);
// console.log(scPath);
let dest = path.join("E:\\PepCodingprog\\file_organiser\\dir", toBeCopiedFileName);
console.log(dest);

// copy the content of scPath(file) to dest(file)// if file dest not present.. then create it and then copy the content
fs.copyFileSync(scPath, dest); 

