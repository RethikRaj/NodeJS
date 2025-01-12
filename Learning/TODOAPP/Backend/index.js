const express = require('express');
const jwt = require('jsonwebtoken');
const {UserModel , TodoModel} = require("./db");
const mongoose = require('mongoose');
const {auth, JWT_SECRET} = require("./auth");

const app = express();

app.use(express.json());

const connectDb = async function(){
    try{
        await mongoose.connect("mongodb+srv://RethikRajRR:gBMC9yeD6WN5Mghq@nodejs.j12uf.mongodb.net/todo-app");
    }catch(err){
        console.log(err.message);
    }
}

app.post("/signup",async (req,res)=>{
    const {email , username, password} = req.body;

    // Step 1 : Input Validation
    // Step 2 : Storing in DB
    await UserModel.create({
        username : username,
        email : email,
        password : password
    });

    res.json({message : "You are signed Up successfully"});
})

app.post("/signin",async (req,res)=>{
    const {email , password} = req.body;

    const user = await UserModel.findOne({
        email : email,
        password : password
    });

    if(user){
        const token = jwt.sign({id : user._id.toString()}, JWT_SECRET);
        res.json({token : token});
    }else{
        res.status(403).json({message : "Invalid Credentials"});
    }
})

app.post("/todo", auth, async (req,res)=>{
    const userId = req.userId;
    const {title, done} = req.body;

    await TodoModel.create({
        title : title,
        done : done,
        userId : userId
    })

    res.json({message : "Todo create successfully"});  
})

app.get("/todos", auth, async (req,res)=>{
    const userId = req.userId;

    const todos = await TodoModel.find({userId : userId});

    res.json({todos : todos});
})

const startServer = async function(){
    await connectDb();
    app.listen(3000, () => {
        console.log("Server is running on port : 3000");
    });
}

startServer();