const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("Hi there from / endpoint");
})


app.listen(3000);