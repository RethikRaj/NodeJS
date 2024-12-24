console.log("Program started Executing...");

const x = 1234;
const y = 5678;

setTimeout(()=>{
    console.log("Should be called after 0ms but it will be called only when the main stack is empty"); 
},0);

// some blocking code
for(let i=0;i< 10000000000;i++);

function multiply(a,b) {
    return a*b; 
}

console.log(`The result of multiplication is ${multiply(x,y)}`);

console.log("Last Line of the program");