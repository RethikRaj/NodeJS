const express = require('express');

const app = express();

let requestCount = 0;

// Middleware
function requestIncreaser(req,res,next){
    requestCount++;
    console.log(`Total number of requests : ${requestCount}`);

    // Use1: Modify request and response object
    req.requestCount = requestCount;

    // Use2: Used to end the request early.
    if(requestCount > 10){
        res.json({"message":"You have made too many requests"});    
    }else{
        next(); // calls the next middleware
    }

    // Note : If we donot call next() or send response , then the request will hang.
}

// Route Handlers
app.get("/sum",requestIncreaser,function(req,res){
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({"answer":a+b});
});

app.get("/multiply",requestIncreaser,function(req,res){
    // main logic    
    const a = parseInt(req.query.a);    
    const b = parseInt(req.query.b);

    res.json({"answer":a*b});
});

app.get("/admin",function(req,res){
    res.json({"message":"You are an admin","requestCount":requestCount});
})

app.listen(3000);