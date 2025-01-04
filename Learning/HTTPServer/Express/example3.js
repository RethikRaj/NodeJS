const express = require('express');

const app = express();

// Example 1 : Since no response is sent , the request will hang.
// app.use(
//     (req,res,next)=>{
//         console.log("Middleware One");
//     }
// );

// Example 2 : Since after last next() there is no next middleware , it will throw an client side error .
// app.use(
//     (req,res,next)=>{
//         console.log("Middleware One : Before next()");
//         next();
//         console.log("Middleware One : After next()");
//     },
//     (req,res,next)=>{
//         console.log("Middleware Two : Before next()");
//         next();
//         console.log("Middleware Two : After next()");
//     },
//     (req,res,next)=>{
//         console.log("Middleware Three : Before next()");
//         next();
//         console.log("Middleware Three : After next()");
//     }
// );

// Example 3: If we send multiple responses during any chaining or anywhere , it will thow an server side error.
// app.use(
//     (req,res,next)=>{
//         console.log("Middleware One ");
//         next();    
//     },(req,res,next)=>{
//         console.log("Middleware Two");
//         next();
//         res.send("Hello World");
//     },
//     (req,res,next)=>{
//         console.log("Middleware Three ");    
//         res.send("Bye World");
//     }
// );

// Example 4 : Array of middlewares => Sane Behaviour
app.use(
    [
        (req,res,next)=>{
            console.log("Middleware One");
            next();
        },
        (req,res,next)=>{
            console.log("Middleware Two");
            next();
        }
    ],
    (req,res,next)=>{
        console.log("Middleware Three");
        res.send("Hello World");
    }
);



app.listen(3000);