const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "any string";

const app = express();

app.use(express.json());

// In memory DB
const users = [];

app.post("/signup",(req,res)=>{
    const username = req.body['username'];
    const password = req.body['password'];

    // Step 1 :  Input validation using zod => Example : signup with existing email , password min length is 8 ,... 

    // Step 2 : Store it in DB
    users.push({
        username : username,
        password : password
    })

    res.status(200).send("SignedUp successfully");

    console.log(users);
})

app.post("/signin",(req,res)=>{
    const username = req.body['username'];
    const password = req.body['password'];

    // Check user exists and if exists then send token
    const user = users.find((user)=>{return user.username === username && user.password === password})
    if(user){
        const token = jwt.sign({
            username : username
        },JWT_SECRET);
        res.json({
            token : token,
            "message" : "Signed In Successfully"
        })
    }else{
        res.status(403).json({
            "message" : "Invalid username and password"
        })
    }

    console.log(users);
})

app.get("/me",(req,res)=>{
    const token = req.headers.authorization;

    const decodedInfo = jwt.verify(token,JWT_SECRET);

    if(decodedInfo){
        const username = decodedInfo.username;
        res.json({
            username : username
        })
    }else{
        res.status(403).json({
            "message" : "Invalid token"
        })
    }
})

app.listen(3000);