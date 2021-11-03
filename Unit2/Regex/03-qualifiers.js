
//check if a number is between 1 and 100



const re1 = /[0-9] |[1-9][0-9] |100 /g

const str1 = ' 1 24 46 100 101 09 '
//console.log(str1.match(re1));


const str2 = "My Number is 1234567890"
const str3 = "(123)456-7890 is my number"
const str4 = "call me at 123-456-7890"
const str5 = "you can reach me at 123 456 7890"

const re2 = /\(?[0-9]{3}[\) -]?[0-9]{3}[- ]?[0-9]{4}/g
// console.log(
//     str2.match(re2),
//     str3.match(re2),
//     str4.match(re2),
//     str5.match(re2),
// );

/*create a password cheacker
- Starts with 3 or more letters cap or lower
- 1 optional capital letter that is not  R D K N U or P
- ends in at least 1 odd number
*/

const str6 = 'werR3 wsdT5 wokmn'
const re3 = /[a-zA-Z]{3,}[ABCEFGHIJLMNOQSTWXYZ]?[13579]+ /g

console.log(str6.match(re3));


