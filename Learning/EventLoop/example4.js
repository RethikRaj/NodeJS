const fs = require("fs");

setImmediate(()=>{console.log("cb of setImmediate executed")});

setTimeout(()=>{
    console.log("cb of setTimeout called");
},0);

Promise.resolve(12345).then((value)=>{console.log(`Resolved Value : ${value}`)});

fs.readFile("sample.txt","utf-8",function(err,data){
    if(err){
        console.error("Error while reading the file : "+ err.message);
    }else{
        console.log("Data in the file : "+ data);
    }
})

process.nextTick(()=>{
    process.nextTick(()=>{console.log("cb of inner process.nextTick executed")});
    console.log("cb of outer process.nextTick executed");
});

console.log("Last Line of the program");