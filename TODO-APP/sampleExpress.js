const express = require("express");
const app = express();

// Creating route handlers
app.get("/",function(req,res){
    res.json({
        firstName : "Rethik"
    })
})

app.post("/",function(req,res){
    res.send("Hello World from post request of / endpoint");
})

app.get("/xyz",function(req,res){
    res.send("<b>Hello World from get request of /xyz endpoint</b>");
})


// Listens infinitely on this port.
app.listen(3000);