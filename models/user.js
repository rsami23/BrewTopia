// Required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the model
const UserSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    firstName: { type: String, required: [true, "Name field is required"] },
    lastName: { type: String },
    userId: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    ageValidate: { type: Boolean, required: true }
});

// Create the model class
const User = mongoose.model("user", UserSchema);

// Export the model
module.exports = User;