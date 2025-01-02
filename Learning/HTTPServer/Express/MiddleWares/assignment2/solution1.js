

const express = require('express');
const app = express();


let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use((req,res,next)=>{
    const userId = req.headers['user-id'];

    if(!userId){
        return res.status(400).send('Missing user-id in headers')
    }

    if(!numberOfRequestsForUser[req.headers['user-id']]){
        numberOfRequestsForUser[req.headers['user-id']] = 0;
    }

    if(numberOfRequestsForUser[req.headers['user-id']] >= 5){
        return res.status(404).send("You have made too many requests")
    }else{
        numberOfRequestsForUser[req.headers['user-id']] += 1;
        next();
    }
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000);

// But this solution is not good enough. Because esetting the entire numberOfRequestsForUser object every second may remove valid data for users who are still active
