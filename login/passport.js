// Required dependencies
const passport = require("passport");
const db = require("../models");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy; // Strategy is a method to authenticate a user
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");


// Create local strategy for returning user log in 
const localOptions = { usernameField: "userId" };
const localLogin = new LocalStrategy(localOptions, function(userId, password, done) {
    // Verify this username and password then call done if it verifys
    // Otherwise call done with false
    db.User.findOne({ userId: userId }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        // Compare passwords, is password entered match user.password
        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return done(err);
            }
            if (!isMatch) {
                return done(null, false);
            }
            return done(null, user);
        });
    });
});

// Setup option for Jwt(json web tokens) Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: config.secret
};

// Create Jwt Strategy 
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // Payload is the decoded jwt token from tokenForUser(), it will return the user id and timestamp
    // Done is cb function we need to call depending on if we can successfullt authenticate the user
    // See if the user id in the payload exists in the db 
    // If it does call done with the user
    // If not call done without a user object
    User.findById(payload.sub, function(err, user) {
        if (err) { 
            return done(err, false); 
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);



