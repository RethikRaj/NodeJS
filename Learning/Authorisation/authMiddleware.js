const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const JWT_SECRET = "This is secret data";

const users = [];

app.post("/signup",(req,res)=>{
    const {username,password} = req.body;

    // Step 1 : input validation

    // Step 2 : Store in DB
    users.push({username : username, password:password});

    // Step 3 : Send a response
    res.json({"message" : "sign up is successful"});
});

app.post("/signin",(req,res)=>{
    const {username,password} = req.body;

    // Step 1 : verify user
    const user = users.find((user)=> user.username === username && user.password === password);

    // Step 2 : If user is valid send a token
    if(user){
        const token = jwt.sign({username : username},JWT_SECRET);
        res.json({token : token});
    }else{
        res.status(403).json({message : "Invalid username or password"});
    }
})

app.use((req,res,next)=>{
    const token = req.headers.authorization;
    try{
        const decodedInfo = jwt.verify(token,JWT_SECRET);
        req.username = decodedInfo.username;
        next();
    }catch(err){
        // console.log(err.message);
        res.status(403).json({message : "Invalid token"})
    }
})

app.get("/me",(req,res)=>{
    res.json({username : req.username});
})














app.listen(3000);