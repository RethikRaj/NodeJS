/*
Assignment #2 - Trying to code a filesystem based todo app and store data into the file
*/

const express = require("express");
const app = express();

app.use(express.json());

const fs = require("fs");
const { json } = require("stream/consumers");

let count = 1;

app.post("/",function(req,res){
    const {todoValue} = req.body; 

    const todo = {"id" : count, "todoValue" : todoValue};
    count++;

    

    fs.readFile("./todo_data.json","utf-8",function(err,data){
        if(err){
            console.error(err.message);
        }else{
            const newData = JSON.parse(data);
            newData.push(todo);
            fs.writeFile("./todo_data.json",JSON.stringify(newData),function(){
                console.log("Written successfully");
            })
        }
    })
})

app.listen(3000);