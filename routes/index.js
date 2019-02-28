//                       DEPENDENCY VARIABLES
//==============================================================
var express = require("express");
var router = express.Router();
var request = require("../models/request");

var {body, validationResult} = require("express-validator/check");

//                      ROUTES
//==============================================================
// INDEX 
router.get("/", function(req, res){
    res.render("index.ejs");
});

// CREATE CONTACT REQUEST
router.post("/", [
    body('name', 'Empty name').isLength({ min: 1 }),
    body('email', 'Empty email').isLength({min: 1}),
    body('message', 'Empty message').isLength({min: 1})
], function(req, res){
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    var contactRequest = {
        name: req.body.name, 
        email: req.body.email, 
        message: req.body.message
    };
    request.create(contactRequest, function(err, dbmessage){
        if(err){
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});



module.exports = router;