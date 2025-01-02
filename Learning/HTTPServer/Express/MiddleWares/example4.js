const express = require('express');
const app = express();

function middlewareOne(req, res, next) {
    console.log("Middleware One: Before next()");
    next();
    console.log("Middleware One: After next()");
}

function middlewareTwo(req, res, next) {
    console.log("Middleware Two : Before next()");
    next();
    console.log("Middleware Two : After next()");
}

app.use(middlewareOne);
app.use(middlewareTwo);

app.get('/', (req, res) => {
    console.log("Route Handler");
    res.send("Hello, world!");
});

app.listen(3000);
