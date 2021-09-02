const fs= require("fs") // "fs" library of import(require) kia or const fs variable pe store kr lia 

// console.log(fs.readFileSync("a.txt", "utf-8")); // encoding ka type utf-8(Basically english)
// console.log(fs.existsSync("a.txt"));
// console.log(fs.existsSync("b.txt"));

// fs.writeFileSync("a.txt", "I am the CEO of the next Big Thing."); // Phle wali file dlt kra . or jo txt pass kia vo daal dega wala 
// fs.writeFileSync("b.txt", "How Are You?"); // agr file exist nhi krti .. to use bnayega or write kr dega msg
// console.log(process.argv);
// console.log(process.argv[3]); // 2nd se indexing start hogi .. TO jo hmne cmdLine arg pass ki uska 1st element aa jayega


// let file1name = process.argv[2];
// let file2name = process.argv[4];

// let file1data = fs.readFileSync(file1name);
// let file2data = fs.readFileSync(file2name);
// let flag = process.argv[3];
// if(flag == "-a"){
//     console.log(file1data + "\n" + file2data);
// }else if(flag == "-aw"){
//     fs.writeFileSync("a.txt", file1data+"\n"+file2data);
// }
// console.log(file1data + "\n" + file2data);
// fs.writeFileSync("a.txt", file1data+"\n"+file2data);