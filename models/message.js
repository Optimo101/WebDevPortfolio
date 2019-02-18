var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    dateSubmitted: {type: Date, default: Date.now}
});


module.exports = mongoose.model("message", messageSchema)