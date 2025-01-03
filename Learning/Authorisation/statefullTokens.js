const express = require('express');

const app = express();

app.use(express.json());

// In memory DB
const users = [];

const generateToken = ()=>{
    const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

    let token = '';
    const tokenLength = 32;

    for(let i=0;i<tokenLength;i++){
        token += options[Math.floor(Math.random()*options.length)];
    }

    return token;
}

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
        const token = generateToken();
        // Store the token in DB
        user.token = token;
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
    
    const user = users.find((user)=> user.token === token);

    if(user){
        res.json({
            username : user.username,
        })

        // do some operation if required (eg : getting courses, .... )
    }else{
        res.status(403).json({
            "message" : "Invalid token"
        })
    }
})

app.listen(3000);