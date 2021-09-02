#!/usr/bin/env node
const fs = require("fs");
let argument = process.argv.slice(2);
let flags = [];
let appendFile = [];
let filenames = [];
let secondaryArg = [];
for(let arg of argument){
    if(arg[0] == "-"){
        if(arg.substring(0, 4) == "-cna"){
            appendFile.push(arg.slice(4));
        }
        else{
            flags.push(arg);
        }
    }else if(arg[0] == "%"){
        secondaryArg.push(arg.slice(1));
    }else{
        filenames.push(arg);
    }
}
function removeAll(string, rs){
    string = string.split(rs).join("");
    return string;
}

for(let file of filenames){
    let filedata = fs.readFileSync(file, "utf-8");
    for(let flag of flags){
        if(flag == "-rs"){
            filedata = removeAll(filedata, " ");
        }
        if(flag == "-rn"){
            filedata = removeAll(filedata, "\r\n");
        }if(flag == "-rsc"){
            for(let sec of secondaryArg){
                filedata = removeAll(filedata, sec);
            }
        }
        if(flag == "-aln"){
            filedata = filedata.split("\n");
            let newfile = [];
            let count = 1;
            for(let data in filedata){
                if(filedata[data] != "\r"){
                    newfile.push(count +". " + filedata[data] + "\n");
                    count+=1;
                }
                else{
                    newfile.push("\n");
                }
            }
            filedata = newfile;
            filedata = filedata.join("");
            fs.writeFileSync(file, filedata);
        }
        //Remove Extra Line.
        if(flag == "-rel"){ 
            filedata = filedata.split("\n");
            let newfile = [];
            let count = 0;
            for(let data in filedata){
                if(filedata[data] == "\r" && count == 1){
                    count=0;
                    newfile.push(filedata[data] + "\n");
                }
                else if(filedata[data] != "\r"){
                    count++;
                    newfile.push(filedata[data] + "\n");
                }
                else{
                    // newfile.push("\n");
                }
            }
            filedata = newfile;
            filedata = filedata.join("");
            // fs.writeFileSync(file, filedata);
        }
    }
    console.log("Current File: ", file );
    console.log(filedata, "\n");
}
if(appendFile.length != 0){
    let files = appendFile[0].split(" ");
    let data = "";
    for(let file of files){
        let filedata = fs.readFileSync(file, "utf-8");
        data += filedata + "\n";
    }
    console.log("New File Appended: NewAppended_file.txt");
    console.log(data);
    // fs.writeFileSync("NewAppended_File.txt", data);
}