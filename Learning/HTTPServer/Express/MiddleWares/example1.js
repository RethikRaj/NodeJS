const express = require('express');

const app = express();

let requestCount = 0;

// This function is sort of like middleware but it do not have access to req,res,next unless we explicitly pass it .
function requestIncreaser(){
    requestCount++;
    console.log(`Total number of requests : ${requestCount}`);
}

app.get("/sum",function(req,res){
    requestIncreaser();

    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({"answer":a+b});
});

app.get("/multiply",function(req,res){
    requestIncreaser();

    // main logic    
    const a = parseInt(req.query.a);    
    const b = parseInt(req.query.b);

    res.json({"answer":a*b});
});

app.listen(3000);