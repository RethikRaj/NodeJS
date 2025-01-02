const express = require('express');
const app = express();

// Solution starts

const usersRequestInfo = {};

app.use((req,res,next)=>{
    const userId = req.headers['user-id'];

    if(!userId){
        return res.status(400).send("Missing user-id in headers");
    }

    const currentTime = new Date().getTime();

    if(!usersRequestInfo[userId]){
        usersRequestInfo[userId] = {"numberOfRequests" : 0, "previousRequestTime" :  currentTime};
    }

    const userData = usersRequestInfo[userId];

    if(currentTime - userData["previousRequestTime"] > 20000){
        userData["numberOfRequests"] = 1;
        userData["previousRequestTime"] = currentTime;
    }else{
        userData["numberOfRequests"] += 1;
    }

    if(userData["numberOfRequests"] > 5){
        return res.status(429).send("Too many requests");
    }

    next();
      
})


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000);