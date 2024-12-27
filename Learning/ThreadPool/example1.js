const crypto = require("crypto");

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    if(err){
        console.error("Error while generating the key : " + err.message);
    }else{
        console.log(`The generated key 1 is : ${key}`);
    }
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    if(err){
        console.error("Error while generating the key : " + err.message);
    }else{
        console.log(`The generated key 2 is : ${key}`);
    }
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    if(err){
        console.error("Error while generating the key : " + err.message);
    }else{
        console.log(`The generated key 3 is : ${key}`);
    }
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    if(err){
        console.error("Error while generating the key : " + err.message);
    }else{
        console.log(`The generated key 4 is : ${key}`);
    }
})


// By default since UV_THREADPOOL_SIZE = 4 => Above 4 async tasks are handled by the libuv thread pool concurrently.

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    if(err){
        console.error("Error while generating the key : " + err.message);
    }else{
        console.log(`The generated key 5 is : ${key}`);
    }
})