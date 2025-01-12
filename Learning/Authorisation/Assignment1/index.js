const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const JWT_SECRET = "I am Batman";

const users = [];

// Return my html from my backend
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup",(req,res)=>{
    console.log(req.body);
    const {username,password} = req.body;
    console.log(username,password);
    // Step 1 : Input validation
    // Step 2 : Store in DB
    users.push({username : username,password : password});

    res.json({message : "Sign up is successful"});
})

app.post("/signin",(req,res)=>{
    const {username,password} = req.body;
    // Step 1 : Check whether user exists in database and password is correct
    const user = users.find((user)=>user.username === username && user.password === password);
    // Step 2 :
    if(user){
        const token = jwt.sign({"username" : username},JWT_SECRET);
        res.json({token : token});
    }else{
        res.status(403).json({"message" : "Invalid username or password"});
    }
})

app.use((req,res,next)=>{
    const token = req.headers.authorization;
    try{
        const decodedInfo = jwt.verify(token,JWT_SECRET);
        const {username} = decodedInfo;
        req.username = username;
        next();
    }catch(err){
        res.status(403).json("Invalid Token");
    }
})

app.get("/me",(req,res)=>{
    console.log("hello ");
    console.log(users);
    res.json({username : req.username});
});

app.listen(3000);