let fs = require('fs');
let path = require('path');
let inputArr = process.argv.slice(2);
console.log(inputArr);
let mainDir = inputArr[0]; // webD
let subD = inputArr.slice(1); // JS, React, MongoDB
// console.log(subD);

let mainDirPath = path.join(process.cwd(), mainDir);
if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}

for(let i of subD){
    // console.log(i);
    let folder = path.join(mainDirPath, i);
    console.log('folder path : ', folder);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
    for(let j=1; j<=3; j++){
        let module=path.join(folder, `Module${j}`);
        // console.log('Module name: ' ,module+j);
        if(!fs.existsSync(module)){
            fs.mkdirSync(module);
        }
        // fs.mkdirSync(module);
        let fileName=path.join(module, 'content.md');
        fs.writeFileSync(fileName, "#Hello EveryOne");
    }
}
