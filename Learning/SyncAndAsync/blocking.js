// const crypto = require("node:crypto");
const crypto = require("crypto");

console.log("Program started Executing...");

const x = 1234;
const y = 5678;

// Synchronous => Blocks the Main Thread => DONT DO THIS.
const syncKey = crypto.pbkdf2Sync("password","salt",5000000,50,'sha512');
console.log(`The generated sync key is : ${syncKey}`);

// Asynchronous 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    if(err){
        console.error("Error while generating the key : " + err.message);
    }else{
        console.log(`The generated async key is : ${key}`);
    }
})

function multiply(a,b) {
    return a*b; 
}

console.log(`The result of multiplication is ${multiply(x,y)}`);

console.log("Last Line of the program");