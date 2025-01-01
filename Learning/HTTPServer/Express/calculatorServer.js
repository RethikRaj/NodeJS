const express = require('express');

const app = express();

app.get("/add",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send(`${a+b}`);
})

app.get("/subtract",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send(`${a-b}`);
})

app.get("/multiply",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send(`${a*b}`);
})

app.get("/divide",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

   res.send(`${a/b}`);
})

app.listen(3000);