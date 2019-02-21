//                       DEPENDENCY VARIABLES
//==============================================================
var express = require("express");
var router = express.Router();
var request = require("../models/request");


//                      ROUTES
//==============================================================
// INDEX 
router.get("/", function(req, res){
    res.render("index.ejs");
});

// CREATE CONTACT REQUEST
router.post("/", function(req, res){
    var contactRequest = {name: req.body.name, email: req.body.email, message: req.body.message};
    request.create(contactRequest, function(err, dbmessage){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;