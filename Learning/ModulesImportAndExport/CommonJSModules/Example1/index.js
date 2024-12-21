require("./something.js"); // Extension(.js) is not mandatory.
// require("./something.js"); // Any subsequent calls to require() for the same file return the cached exports without re-executing the file.

require("./sumWithoutExport.js");

// calculateSumWithoutExport(10,20); // Reference Error : not defined

const {firstName, calculateSum} = require("./sumWithExport.js")

const a = 10;
const b = 20;

console.log(firstName);
console.log(calculateSum(a,b));

// requiring a json file
const data = require("./data.json");
console.log(data);




