/*
Assignment #1 - Trying to code a todo app and store data into the array
*/

const express = require("express");
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());
app.use(express.text());

let todos = [];

let todoCount = 1;

app.post("/",function(req,res){
    const todoValue = req.body;
    const id = todoCount;
    todoCount += 1;
    todos.push({"id" : id, "todoValue":todoValue});
    res.send(todos);
})

app.get("/",function(req,res){
    res.json(todos);
})

app.put("/",function(req,res){
    const todeleteTODO = req.body; // {id : , todoValue : newValueoftodo}
    
    for(let i=0;i<todos.length;i++){
        if(todos[i].id === todeleteTODO.id){
            todos[i].todoValue = todeleteTODO.todoValue;
        }
    }

    res.json(todos);
})

app.delete("/",function(req,res){
    const id = parseInt(req.body); 
    todos = todos.filter((todo)=>{
        return todo.id !== id;
    })
    res.send(todos);
})


app.listen(3000);

