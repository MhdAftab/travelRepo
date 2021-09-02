let fs = require('fs');
let path = require('path');
let inputArr = process.argv.slice(2);

let fileArr = fs.readdirSync("E:\\PepCodingprog\\file_organiser\\Activity1");
let newData = "";
for(let file of fileArr){
    let fileExe = path.extname(file);
    if(fileExe == ".txt"){
        let filedata = fs.readFileSync(file, 'utf-8');
        newData += filedata + "\n";
    }
}
fs.writeFileSync('c.txt', newData);
let scPath = 'E:\\PepCodingprog\\file_organiser\\Activity1\\c.txt';
let dest = path.join("E:\\PepCodingprog\\file_organiser\\Activity1", 'ans.txt');
console.log(dest);
fs.copyFileSync(scPath, dest); 