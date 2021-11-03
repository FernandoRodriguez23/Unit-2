//asynchronous - several commands can be executed out of order

const { readFile, write, writeFile } = require("fs");
console.log("start");
//These are async so they will return promises
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/async-results.txt",
      `Here is the results 
            ${first} 
            \n${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Mission Complete");
      }
    );
  });
});

console.log("Next Task");
