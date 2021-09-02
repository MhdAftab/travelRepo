let fs = require("fs");
let path = require("path");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organiseFn(dirPath){
    let destPath;
    if(dirPath == undefined){
        console.log("Please right the dir path.");
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            destPath = path.join(dirPath, "organised_file");
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }
        }else{
            console.log("Kindly enter the correct path.");
            return;
        }
    }
    organise_helper(dirPath, destPath);
}

function organise_helper(src, dest){
    let childNames = fs.readdirSync(src);
    for(let content of childNames){
        let childAddress = path.join(src, content);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            let category = getCategory(childAddress);
            sendFile(childAddress, dest, category);
        }else{
            let base = path.basename(childAddress);
            if(base != "organised_file"){
                console.log("Not a File: " ,childAddress);
                organiseFn(childAddress);
            }
        }
    }
}

function sendFile(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}

function getCategory(name){
    let extname = path.extname(name);
    extname = extname.slice(1);
    for(let type in types){
        let singleType = types[type];
        for(let st of singleType){
            if(extname == st){
                return type;
            }
        }
    }
    return "others";
}

module.exports={
    organiseFn:organiseFn
}