// Modules protect their variables and functions from leaking 

console.log("Sum Module Excuted");

// var x = "King Kohli";

 function sumCalculate (a, b){

    const sum = a + b;

    console.log(sum);
}

// module.exports = {
//     x: x,
//     sumCalculate: sumCalculate,
// };
module.exports = { sumCalculate};