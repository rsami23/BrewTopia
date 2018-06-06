const usersController = require("../controllers/usersController");
const passportService = require("../login/passport");
const passport = require("passport");

// Middleware
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false }); 

module.exports = function(app){
    app.post("/signin", requireSignin, usersController.signin);
    app.post("/signup", usersController.signup);
}

