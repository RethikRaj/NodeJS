const fs = require("fs");

const a = 100;

fs.readFile("sample.txt","utf-8",function(err,data){
    if(err){
        console.error("Error while reading the file : "+ err.message);
    }else{
        console.log("Data in the file : "+ data);
    }
})

Promise.resolve(12345).then((value)=>{console.log(`Resolved Value : ${value}`)});

setImmediate(() => {console.log("cb of setImmediate executed");});

process.nextTick(()=>{console.log("cb of process.nextTick 1 executed")});

setTimeout(()=>{
    console.log("cb of setTimeout 1 called");
},0);

setTimeout(()=>{
    console.log("cb of setTimeout 2 called");
},0);

process.nextTick(()=>{console.log("cb of process.nextTick 2 executed")});

function print(a){
    console.log(a);
}

print(a);
console.log("Last Line of the program");
