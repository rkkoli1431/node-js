const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(()=> console.log("Timer expired"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8",()=>{
    console.log("File Reading CB");
});

process.nextTick(()=>{
    process.nextTick(()=> console.log("inner nextTick"));
    console.log("nextTick");
});

console.log("Last Line of the file");
