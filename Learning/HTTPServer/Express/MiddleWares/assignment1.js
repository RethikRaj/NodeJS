// Create a middleware function that logs each incoming request’s HTTP method, hostname,URL, and timestamp to the console

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.hostname);
    console.log(req.url);
    console.log(new Date().getFullYear());
    next();
})

app.get("/",(req,res)=>{
    res.json({"hello" : "You are at / endpoint"})
})

app.listen(3000);