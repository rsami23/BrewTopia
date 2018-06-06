// Required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define the model
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userId: { type: String, unique: true, lowercase: true },
    password: String
});

// On save encrypt password
// Before saving a user run this function
userSchema.pre("save", function(next){
    // Get access to user model
    const user = this;
    // Generate a salt(random characters) then run the callback
    bcrypt.genSalt(10, function(err, salt) {
        if(err) { return next(err); }
        // Encrypt the password using salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) { return next(err); }
            // Overwrite password in db that is in plain text with encrypted password
            user.password = hash;
            // Save the model
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
}

// Create the model class
const User = mongoose.model("user", userSchema);

// Export the model
module.exports = User;