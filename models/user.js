// Required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the model
const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    userId: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    ageValidate: { type: Number, required: true }
});

// Create the model class
const user = mongoose.model("user", userSchema);

// Export the model
module.exports = user;