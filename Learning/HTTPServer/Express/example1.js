const express = require('express');

const app = express();

// Creating route handlers
app.use('/',(req,res)=>{
    res.send("Hello World from / endpoint .");
})

// req, res => request , response
app.use('/test',(req,res)=>{
    res.send("Hello World from /test endpoint .");
})

app.listen(7777,()=>{
    console.log("Server is listening on port 7777");
});