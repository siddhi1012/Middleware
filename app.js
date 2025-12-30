const express = require("express"); 
const app = express();

app.use(() =>{
    console.log("Hi, I am middleware");
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