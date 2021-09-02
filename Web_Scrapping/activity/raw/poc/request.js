// npm i request
let request = require("request");
console.log("Before");
request("https://www.google.com/", cb);
function cb(error, response, html){ // it is s async function.. execute after the main line of file get executed
    if(error){
        console.log(error);
    }else if(response.statusCode == false){
        console.log("Page Not Found");
    }else{
        // console.log(html); // print HTML code for google.com
        console.log("html");
    }
}
console.log("After");