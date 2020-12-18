/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

//  找两个字符串的不同的那一个
// var findTheDifference = function(s, t) {
//     let ret = 0;
//     for (const ch of s) {
//         ret = ret ^ ch.charCodeAt();
//     }
//     for (const ch of t) {
//         ret = ret ^ ch.charCodeAt();
//     }
//     let endTime= new Date().getTime();
//     return String.fromCharCode(ret);
// };



// var findTheDifference = function(s, t) {
//     let as = 0, at = 0;
//     for (let i = 0; i < s.length; i++) {
//         as += s[i].charCodeAt();
//     }
//     for (let i = 0; i < t.length; i++) {
//         at += t[i].charCodeAt();
//     }
//     return String.fromCharCode(Math.abs(as-at));
// };

// let res=findTheDifference("abcde",
// "dabcef")


// console.log(res);
