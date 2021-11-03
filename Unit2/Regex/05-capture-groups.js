const str = `
test.js
coding_01.js
style.css
html.css
1234567898765432345678765432
html.html
index.html
coding.git
.jpeg
something
another.png
script.js
Chad
`;

const re = /(\w+)\.(js|css|html|png|git|jpeg)/g

let match = re.exec(str);
// console.log(match);
let fileTypes = {};

//LOOP FOR EXEC()
while(match){
    console.log(`filename: ${match[1]} Extension: ${match[2]}`);
    if(!fileTypes[match[2]]){
        fileTypes[match[2]] = 1
    } else {
        fileTypes[match[2]] ++
    }

    match = re.exec(str)
}

console.log(fileTypes);