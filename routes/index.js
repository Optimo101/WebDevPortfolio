//                       DEPENDENCY VARIABLES
//==============================================================
var express = require("express");
var router = express.Router();
var request = require("../models/request");
var validator = require("validatorjs");

//                      ROUTES
//==============================================================
// INDEX 
router.get("/", function(req, res){
    res.render("index.ejs",
    {  
        success: req.session.success,
        posted: req.session.posted,
        userName: req.session.name, 
        userEmail: req.session.email, 
        userMessage: req.session.message,
        hasErrorName: req.session.hasErrorName,
        hasErrorEmail: req.session.hasErrorEmail,
        hasErrorMessage: req.session.hasErrorMessage,
        errorName: req.session.errorName,
        errorEmail: req.session.errorEmail,
        errorMessage: req.session.errorMessage
    });
    req.session.success = false;
    req.session.posted = false;
});

// CREATE CONTACT REQUEST
router.post("/post", function(req, res){
    req.session.posted = true;

    let formData = {
        name: req.body.name, 
        email: req.body.email, 
        message: req.body.message
    };
    let rules = {
        name: 'required|string',
        email: 'required|string|email',
        message: 'required|string'
    };

    req.session.name = formData.name;
    req.session.email = formData.email;
    req.session.message = formData.message;

    const validation = new validator(formData, rules);

    if (validation.fails()) {
        req.session.success = false;

        req.session.hasErrorName = validation.errors.has("name");
        req.session.hasErrorEmail = validation.errors.has("email");
        req.session.hasErrorMessage = validation.errors.has("message");

        req.session.errorName = validation.errors.first("name");
        req.session.errorEmail = validation.errors.first("email");
        req.session.errorMessage = validation.errors.first("message");

        res.redirect("/");

    } else {
        req.session.success = true;
        request.create(formData, function(err, dbmessage){
            if(err){
                console.log(err);
            } else {
                res.redirect("/");
            }
        });
    }
});

module.exports = router;