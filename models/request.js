var mongoose = require("mongoose");

var requestSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    dateSubmitted: {type: Date, default: Date.now}
});


module.exports = mongoose.model("request", requestSchema)