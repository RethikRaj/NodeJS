const express = require('express');

const app = express();

app.get("/user",function(req,res,next){
    console.log("Route Handler 1");
    next();
})

app.get("/user",function(req,res){
    console.log("Route Handler 2");
    res.send("Hello World");
})

app.listen(3000);