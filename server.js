// Required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Morgan setup
app.use(morgan('combined'));

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
const routes = require("./routes/users.js")(app);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brewtopia",
);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
