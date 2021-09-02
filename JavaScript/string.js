// let firstname = "Mohd";
// let lastname = "Aftab";
// console.log(firstname +" " + lastname);

// let fullname = `${firstname} ${lastname}`;
// console.log(fullname);

//String methods

//Length in string
let str = "Mohd Aftab";
// console.log(str.length)

//Substring
// console.log(str.slice(2,6)); // end point excludes
// console.log(str.slice(-9,-2)); // -ve value allowed
// console.log(str.substring(2,6));
// console.log(str.substr(2, 6));

//trim method
// let name = "        Mohd Aftab       ";
// console.log(name.length);
// console.log(name.trim().length) // remove all spaces before and after

//UpperCase 
// // let str = "Mohd Aftab";
str = str.toLowerCase();
console.log(str);
str = str.toUpperCase();
console.log(str);
str = "Mohd Aftab";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// // replace
// let st = "Bhavesh Bansal";
// console.log(st.replace("Bansal", "Sharma"));
console.log(str.charAt(1)); // gives character
console.log(str.charCodeAt(0)); // gives ascii value

console.log(str[0]); // get the 0th char of str
str[0] = "I"; // no use .. as strings are immutable
console.log(str);
