// let b = require('.owner'); // string wala 
// let b = require('./owner'); // importing a file owner
let bObj = require('./owner');
// console.log(b("I am Aftab.")); 

// using exported object
console.log(bObj.var);
console.log(bObj.string);
console.log(bObj.fooFnc("Hello , I am Aftab"));