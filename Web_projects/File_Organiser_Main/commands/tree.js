let fs=require('fs');
let path=require("path");
let inputArr = process.argv.slice(2);
let srcPath = inputArr[0];
"├──"
function treeFn(srcPath){
    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("\t"+"└──");
    let content=fs.readdirSync(srcPath);
    let allEntities="";
    for(let i=0;i<content.length;i++){
        let dirPath = path.join(srcPath, content[i]);
        let isDir = fs.lstatSync(dirPath).isDirectory();
        if(isDir){
            treeFn(dirPath);
            console.log("\t");
        }
        if(i == 0){
            allEntities+='\t'+"├──"+content[i];
        }
        else{
            allEntities+='\n\t'+"├──"+content[i];
        }
    }
    console.log(allEntities);
}

// treeFn(srcPath);
module.exports={
    treeFn:treeFn
}