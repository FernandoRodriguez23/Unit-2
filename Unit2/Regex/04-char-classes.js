
const str5 = 'mr.dome, Mr. Doug, Ms. Smith, Ms.Tony, Mr. Laurane'
const re5 = /M[rs]\. [A-z][a-z][a-z][a-z][a-z]/g; 
const rerf = /^M[rs]\. [A-Z][a-z]{3,}$/g;

console.log(str5.match(rerf));


const re1 = /\b[0-9]\b|\b[1-9][0-9]\b|100/g
const re1rf = /\b\d\b|\b[1-9]\d\b|\b100\b/g

const str5 = ' 1 24 46 100 101 09 '


const str1 = ' 1 24 46 100 101 09 '
console.log(str1.match(re1fr));

const re2 = /\(?[0-9]{3}[\) -]?[0-9]{3}[- ]?[0-9]{4}/g
const re2rf = /\(?\d{3}[\)\W]?\d{3}\W?\d{4}/g
