let str = "Hakuna Matata";
let a = 10;
// console.log(module); // every js file has this module .. contains basically a summary and every details of a file
// module.exports = str; // exporting a variable

function foo(msg){
    return "Hi I was made in owner.js. " + msg;
};
// module.exports= foo; // exporting a function
console.log("I will also get exported without using exports."); // bcoz require hone se phle puri file run hogi
//Exporting an Object
module.exports = {
    var : a,
    string : str,
    fooFnc : foo
}