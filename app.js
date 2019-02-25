var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    indexRoutes = require("./routes/index.js");

//============================================================
app.use(express.static(__dirname + "/public"));
app.use('/scripts', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/portfoliodb", {useNewUrlParser: true});

app.use(indexRoutes);

//============================================================
app.listen(3000, "localhost",function(){
    console.log("Server started...");
});