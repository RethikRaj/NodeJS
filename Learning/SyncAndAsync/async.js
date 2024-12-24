const fs = require("fs");

console.log("Program started Executing...");

const x = 1234;
const y = 5678;


// If JS engine encounters any asynchronus task ,then it offloads the async task along with cb to libuv and moves on the next line for execution.
setTimeout(()=>{
    console.log("Cb of setTimeout called afte 5 seconds hopefully.");
},5000);

fs.readFile("sample.txt","utf-8",function(err,data){
    if(err){
        console.error("Error while reading the file : "+ err.message);
    }else{
        console.log("Data in the file : "+ data);
    }
})


function multiply(a,b) {
    return a*b; 
}

console.log(`The result of multiplication is ${multiply(x,y)}`);

console.log("Last Line of the program");

