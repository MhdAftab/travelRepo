// let str = "Mohd Aftab";
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

// for(let i=0; i<str.length; i++){
//     console.log(str.charCodeAt(i));
// }

// let st = "adbfbffbfbfbbabftbaftt";
// let count = 0;
// for(let i=0; i<st.length; i++){
//     if(st[i] == 'b'){
//         count++;
//     }
// }
// console.log(count);

// let str = "35454354465443434";
// let sum = 0;
// for(let i=0; i<str.length; i++){
//     sum += parseInt(str[i]); // convert into integer
// }

// console.log(sum);
// let str = '3545435446AAAAAA5443434';
// let sum = 0;
// for(let i=0; i<str.length; i++){
//     if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) < 58){
//         sum += parseInt(str[i]);
//     }else{
//         sum += str.charCodeAt(i);
//     }
// }
// console.log(sum);

// let str = "23456";
// let ans = 0;
// for(let i=0; i<str.length; i+=2){
//     console.log(str.substr(i, 2));
//     ans += parseInt(str.substr(i, 2));
// }
// console.log(ans);

// let str = '3545435446AAAAAA5443434';
// let sum = 0;
// for(let i=0; i<str.length; i++){
//     if(!isNaN(str[i])){ // kya vo (Not a Number)NaN nhi hai.. to mtlb number hai 
//         sum += parseInt(str[i]);
//     }else{
//         sum += str.charCodeAt(i);
//     }
// }
// console.log(sum);

// let str = "Mohd Aftab";
// let rev = "";
// for(let i=str.length-1; i>=0; i--){
//     rev += str[i];
// }
// console.log(rev);
/*
    Word by word reverse (Method 1)
*/
// let str = "Bhavesh Bansal";
// let rev = "";
// let word = "";
// for(let i=str.length-1; i>=0; i--){
//     if(str[i] == " "){
//         word = " "+rev + word;
//         rev = "";
//     }
//     else{
//         rev += str[i];
//     }
// }
// word = rev + word;
// console.log(word);

/*
    Word by word reverse (Method 2)
    phle string reverse kr lo .. fir last se travel kro.. 
    agr space/i==0 mila to space se end point(initially at end) tk add krdo .. then end = spaceIdx 
*/
// let str = "Mohd Aftab";
// let rev = "";
// for(let i=str.length-1; i>=0; i--){
//     rev += str[i];
// }
// console.log(str);
// let word = "";
// let start = undefined;
// let end = rev.length;
// for(let i=rev.length-1; i>=0; i--){
//     if(rev[i] == " "){
//         start = i+1;
//         word += rev.substring(start, end) +" ";
//         end = i;
//         start = undefined;
//     }else if(i == 0){
//         start = 0;
//         word += rev.substring(start, end);
//     }
// }
// console.log(word);

/*
    PALIMDROME WORD(2 Pointer approach)
*/
let str = "aabbaa";
let flag = true;
for(let i=0, j=str.length-1; i<j; i++, j--){
    if(str[i] != str[j]){
        flag = false;
        break;
    }
}
console.log("Palindrome = " , flag);