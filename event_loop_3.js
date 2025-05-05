/**
 * Last Line of the file
 * nextTeck
 * Promise
 * Timer expired
 * setImmediate
 * File Reading CB
 * 2nd nextTeck
 * 2nd setImmediate
 * 2nd Timer
 */

const fs = require("fs");

setImmediate(()=> console.log("setImmediate"));

setTimeout(()=> console.log("Timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8",()=>{

    setTimeout(()=> console.log("2nd Timer"),0);

    process.nextTick(()=> console.log("2nd nextTeck"));

    setImmediate(()=> console.log("2nd setImmediate"));

    console.log("File Reading CB")
});

process.nextTick(()=>console.log("nextTeck"));
console.log("Last Line of the file ");