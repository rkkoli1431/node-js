const fs = require("fs");
const a = 100;
setImmediate(()=>{
    console.log("setImmediate");
});

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("File Reading CB");
});

setTimeout(()=>{
    console.log("Time expired")
},0);

function printA(){
    console.log("a = ",a);
}

printA();
console.log("Last line of the file");


// Excution of this program 

/**
 * a = 10
 * Last line of  the file
 * Time expired
 * setImmediate
 * File Reading CB 
 */