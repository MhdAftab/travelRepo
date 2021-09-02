let path = require('path'); // To do the operations with paths 
let fs=require('fs');

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let fileName = inputArr[0];
let content = inputArr[1];
// console.log('fileName:', fileName);
// console.log('content:', content);

let currentPath = process.cwd(); // gives the path of a current working directory
// console.log(currentPath);

let joinedPath = path.join(currentPath, 'abc', 'def'); // join the path infront of currentPath(given path)
// console.log(joinedPath);
let exeName = path.extname('path.js');
console.log(exeName);