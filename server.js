// Required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cors = require("cors");
const routes = require("./routes");
// const router = require('./routes/api/beers');
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Morgan setup
app.use(morgan('combined'));

// Cors setup
app.use(cors());

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add Auth route
// require("./routes/api/users.js")(app);
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brewtopia",
);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on portx ${PORT}!`);
});
