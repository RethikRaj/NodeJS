const express = require('express');
const jwt = require('jsonwebtoken');
const {UserModel , TodoModel} = require("./db");
const mongoose = require('mongoose');
const {auth, JWT_SECRET} = require("./auth");
const bcrypt = require('bcrypt');
const {z} = require('zod');

const app = express();
const saltRounds = 10;

app.use(express.json());

const connectDb = async function(){
    try{
        await mongoose.connect("mongodb+srv://RethikRajRR:gBMC9yeD6WN5Mghq@nodejs.j12uf.mongodb.net/todo-app");
    }catch(err){
        console.log(err.message);
    }
}

app.post("/signup",async (req,res)=>{
    // Step 1 : Input Validation using zod
    /* req.body = {username : String, email : String, password : string} */
   

    const requiredBodySchema = z.object({
        username : z.string().min(3).max(100),
        email : z.string().min(3).max(50).email(),
        password : z
            .string()
            .min(7)
            .max(50)
            .refine((password) => {
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
                return hasUpperCase && hasLowerCase && hasSpecialChar;
            }, {
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
            })
    })

    const {success, data , error} = requiredBodySchema.safeParse(req.body);

    if(!success){
        res.status(403).json({
            message : "Invalid format",
            error : error
        })
        return;
    }


    const {email , username, password} = req.body;
    // Step 2 : Hashing the password and then storing hashed password and salt in DB
    try{
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        await UserModel.create({
            username : username,
            email : email,
            password : hashedPassword
        });
        res.json({message : "You are signed Up successfully"});
    }catch(err){
        res.status(403).json({message : "User already exists with same email id"});
    }    
})

app.post("/signin",async (req,res)=>{
    const {email , password} = req.body;

    const user = await UserModel.findOne({
        email : email
    });

    if(!user){
        res.status(403).json({message : "The user does not exist in our db"});
        return;
    }

    const passwordMatch = await bcrypt.compare(password,user.password);


    if(passwordMatch){
        const token = jwt.sign({id : user._id.toString()}, JWT_SECRET);
        res.json({token : token});
    }else{
        res.status(403).json({message : "Invalid Credentials"});
        return;
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