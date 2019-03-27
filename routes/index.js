//                       DEPENDENCY VARIABLES
//==============================================================
var   express = require("express"),
        router = express.Router(),
        request = require("../models/request"),
        validator = require("validatorjs");
        // nodemailer = require("nodemailer");

//                     NODEMAILER INFO
//==============================================================
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'patronepatron@gmail.com',
//         pass: 'GmailSchiller@741852963'
//     }
// });

//                      ROUTES
//==============================================================
// ===================== INDEX 
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

// ================ CREATE CONTACT REQUEST
router.post("/post", function(req, res){
    req.session.posted = true;
    // Consolidating user's inputs into object
    let formData = {
        name: req.body.name, 
        email: req.body.email, 
        message: req.body.message
    };
    // Creating validation rules for each input field
    let rules = {
        name: 'required|string',
        email: 'required|string|email',
        message: 'required|string'
    };
    // Setting user's inputs to a session object to pass through to 'GET' route
    req.session.name = formData.name;
    req.session.email = formData.email;
    req.session.message = formData.message;

    // Creating a HTML template to be used in the email sent by NodeMailer
    // const emailTemplate = `
    //     <h3>Contact Details</h3>
    //     <ul>
    //         <li>Name: ${formData.name}</li>
    //         <li>Email: ${formData.email}</li>
    //         <li>Message: ${formData.message}</li>
    //     </ul>
    // `;

    // Defining which email account to use, the subject name that will appear and the email's body template
    // let mailOptions = {
    //     from: 'patronepatron@gmail.com',
    //     to: 'schiller.justin@gmail.com',
    //     subject: 'WebDev Contact Request Form',
    //     html: emailTemplate
    // };

    // New validation using the user's inputs and associated rules of each input field
    const validation = new validator(formData, rules);

    // If the post submission failed any of the validation rules...
    if (validation.fails()) {
        req.session.success = false;

        req.session.hasErrorName = validation.errors.has("name");
        req.session.hasErrorEmail = validation.errors.has("email");
        req.session.hasErrorMessage = validation.errors.has("message");

        req.session.errorName = validation.errors.first("name");
        req.session.errorEmail = validation.errors.first("email");
        req.session.errorMessage = validation.errors.first("message");

        res.redirect("/");
    
    // If the post submission passes all validation rules
    } else {
        req.session.success = true;
        request.create(formData, function(error, dbmessage){
            if(error){
                console.log(error);
            } else {
                res.redirect("/");
            }
        });
        
        // After validation passes, send an email with the form's inputted info
        // transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log("Contact request email sent!");
        //         console.log(info);
        //     }
        // });
    }
});

module.exports = router;