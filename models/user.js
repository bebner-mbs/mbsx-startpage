var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");

//Mongoose schema
var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    eMail: String,
    username: String,
    password: String,
    role: String,
    image: String
});

//Authentication
userSchema.plugin(passportLocalMongoose);

//Module and Export
module.exports = mongoose.model("User", userSchema);