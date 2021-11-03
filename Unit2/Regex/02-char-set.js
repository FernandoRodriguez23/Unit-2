
//All capitals
const re = /[A-Z]/g;

//find any vowel
const re2 = /[aeiouAEIOU]/

//find any even number
const re3 = /[24680]/

//find any file ending in js
const re4 = /\.js/

/*find any name that :
- starts with Mr or Ms
- then has a space
then has at leasr a 4 letter name starting wuth a capital
*/

const str5 = 'mr.dome, Mr. Doug, Ms. Smith, Ms.Tony, Mr. Laurane'
const re5 = /M[rs]\. [A-z][a-z][a-z][a-z][a-z]/g; 

console.log(str5.match(re5));