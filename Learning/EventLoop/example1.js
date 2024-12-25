const fs = require("fs");

const a = 100;

fs.readFile("sample.txt","utf-8",function(err,data){
    if(err){
        console.error("Error while reading the file : "+ err.message);
    }else{
        console.log("Data in the file : "+ data);
    }
})

setImmediate(() => {console.log("cb of setImmediate executed");});

setTimeout(()=>{
    console.log("cb of setTimeout");
},0);

function print(a){
    console.log(a);
}

print(a);
console.log("Last Line of the program");
