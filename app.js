require("./xyz.js");
// const {x, sumCalculate} = require("./calculate/sum.js");
 
const util = require("node:util");  // Big Object 


const {sumCalculate, mult} = require("./calculate");

const data = require("./data.json");




// import {x,sumCalculate} from "./sum.js";
var name = "Rahul Kohli";

var a = 14;

var b = 31;


sumCalculate(a,b);
mult(a,b);
console.log(data);
// console.log(x);

// console.log(name);
// console.log(a+b);
console.log(globalThis === global);
// console.log(global);
