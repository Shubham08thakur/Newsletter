const express = require("express");
const bodyParser =require("body-parser");
const request = require("request");


const app =express();

app.use(express.static("private"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
    var firstname=req.body.fname;
    var lastname=req.body.lname;
    var email=req.body.email;

    console.log(firstname, lastname, email);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

//3c0facd1e7bc7f416e82706bd4f3f0b7-us17
