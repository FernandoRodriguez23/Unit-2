
const fs = require('fs')
const input = fs.readFileSync('./jenkins.txt', 'utf8')

//================   KEY   ===================//

/*

Answer for Part 1
console.log(oldCityState)

Answer for Part 2
console.log(finalCords)

Answer for Part 3
console.log(newWords)

 */





//Part 1

const re1 = /[@]([A-Z]|[a-z])+/g

let cityState = input.match(re1)
let newCityState =  cityState.join("").toString()
let oldCityState = newCityState.replace(/[@]/g, "");

//console.log(oldCityState);

//Part 2
const re2 = /([0-2]([A-Z]|[a-z]){3,}[0-5]([A-Z]|[a-z]){3,}[1-5]([A-Z]|[a-z]){3,})°/g;

let firstThree = input.match(re2);
let newCords =  firstThree.join("").toString()
let cords1 = newCords.replace(/[A-Za-z]/g, "");

//console.log(cords1);

const re3 = /([0-6]([A-Z]|[a-z]){3,}[1-3]([A-Z]|[a-z]){3,})['|.]/g

let nextTwo = input.match(re3);
let  newCords2 =  nextTwo.join("").toString()
let cords2 = newCords2.replace(/[A-Za-z]/g, "");

//console.log(cords2);


const re4 = /[1-7]([a-z]|[A-Z]){3,}["][a-z]{3,}(N|W|S|E)/g

//console.log(input.match(re4));
let finalNum = input.match(re4);
let  newCords3 =  finalNum.join("").toString()
let cords3 = newCords3.replace(/[ABCDFGHIJKLMOPQRTUVXYZ]|[a-z]/g, "");

//console.log(cords3);

let finalCords = cords1 + cords2 + cords3;
//console.log(finalCords);

const re6 = /(([A-za-z]([0-9]?){1,11}){1,11}([.]?))\]/g;

let words = input.match(re6)
let messWords =  words.join("").toString()
let newWords = messWords.replace(/[0-9]|[\]]|[\[]/g, "");

//console.log(newWords);
