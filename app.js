var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var message = require("./models/message")


//============================================================
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/portfoliodb", {useNewUrlParser: true});

//=====================================================================================
// INDEX ROUTE
app.get("/", function(req, res){
    res.render("index.ejs");
});

// USER CONTACT CREATE ROUTE
app.post("/", function(req, res){
    var contactPost = {name: req.body.name, email: req.body.email, message: req.body.message};
    message.create(contactPost, function(err, dbmessage){
        if(err){
            console.log(err);
        } else {
            console.log(dbmessage);
            res.redirect("/");
        }
    });
});

//=================================================================================================
app.listen(3000, "localhost",function(){
    console.log("Server started...");
});