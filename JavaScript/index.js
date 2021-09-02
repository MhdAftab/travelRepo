const fs = require("fs");
let argument = process.argv.slice(2);
let filenames = [];
for(let file of argument){
    filenames.push(file);
}
for(let file of filenames){
    let filedata = fs.readFileSync(file, "utf-8");
    filedata = filedata.split("\n");
    let newfile = [];
    let count = 1;
    for(let data in filedata){
        if(filedata[data] != "\r"){
            // console.log(count+". "+filedata[data]);
            newfile.push(count +". " + filedata[data] + "\n");
            count+=1;
        }
        else{
            // console.log();
            newfile.push("\n");
        }
    }
    filedata = newfile;
    fs.writeFileSync(file, filedata.join(""));
    console.log(filedata.join(""));
}