// npm i request
let request = require("request");
let cheerio = require("cheerio"); // for data extraction
console.log("Before");
let url = "https://www.espncricinfo.com/series/ipl-2021-1249214/delhi-capitals-vs-royal-challengers-bangalore-22nd-match-1254079/ball-by-ball-commentary";
request(url, cb);
function cb(error, response, html){ // it is s async function.. execute after the main line of file get executed
    if(error){
        console.log(error);
    }else if(response.statusCode == false){
        console.log("Page Not Found");
    }else{
        // console.log(html); // print HTML code for google.com
        // console.log("html");
        dataExtractor(html);
    }
}

function dataExtractor(html){
    // search tool
    let searchTool = cheerio.load(html);
    // css selector 
    let elemRep = searchTool(".match-comment .match-comment-long-text.match-comment-padder>p");
    
    let lbc = searchTool(elemRep[3]).text();
    console.log(lbc);
}

console.log("After");

// .match-comment .match-comment-long-text.match-comment-padder