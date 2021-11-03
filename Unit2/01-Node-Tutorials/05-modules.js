const names = require(`./04-names`);
const numbers = require(`./01-intro`);
const sayHi = require(`./06-module-fun`);

//destrucing is possiabel

const {john, jimmy} = names

console.log(names);
console.log(numbers.num);
sayHi(names.john);
