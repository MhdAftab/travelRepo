const fs = require("fs");
let filedata = fs.readFileSync("p.txt", "utf-8");

let lineNumber = 1;
filedata = lineNumber + ". " + filedata;
filedata = filedata.split("");
lineNumber = 2;
for(let i=0; i<filedata.length; i++){
    if(filedata[i] == "\n"){
        filedata.splice(i+1, 0, lineNumber+". ");
        lineNumber += 1;
    }
}
filedata = filedata.join("");
fs.writeFileSync("p.txt", filedata);
console.log(filedata);
