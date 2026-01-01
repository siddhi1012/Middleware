const express = require("express"); 
const app = express();

// app.use((req,res,next) =>{
    
//     console.log("Hi, I am middleware");
//     next();
// });

app.use((req,res,next) =>{
    req.time = new Date (Date.now());
    console.log(req.method, req.hostname,req.path,req.time);
    next();

});

app.get("/",(req,res) =>{
    res.send("Hi, I am Root");
})


//middleware -> response send
app.get("/random",(req,res) =>{
    res.send("this is random page");
})



app.listen("8080",(req,res) =>{
    console.log("server listening to the port 8080");

});