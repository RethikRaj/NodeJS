console.log("sum with export is executing");

let firstName = "Rethik"; 

function calculateSum(a,b){
    return a+b;
}

console.log("sum with export is executed");

// Way 1
// module.exports = {"firstName": firstName, "calculateSum" : calculateSum};

// Way 2
// module.exports = {firstName,calculateSum};

// Way 3
console.log(module.exports); // empty object
module.exports.firstName = firstName;
module.exports.calculateSum = calculateSum;