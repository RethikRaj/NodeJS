const fs = require("fs");

setImmediate(()=>{console.log("cb of setImmediate 1 executed")});

setTimeout(()=>{
    console.log("cb of setTimeout 1 called");
},0);

Promise.resolve(12345).then((value)=>{console.log(`Resolved Value : ${value}`)});

fs.readFile("sample.txt","utf-8",function(err,data){
    if(err){
        console.error("Error while reading the file : "+ err.message);
    }else{
        setTimeout(()=>{
            console.log("cb of setTimeout 2 called");
        },0);

        process.nextTick(()=>{console.log("cb of process.nextTick 2 executed")});

        setImmediate(()=>{console.log("cb of setImmediate 2 executed")});


        console.log("Data in the file : "+ data);
    }
})

process.nextTick(()=>{console.log("cb of process.nextTick 1 executed")});

console.log("Last Line of the program");
