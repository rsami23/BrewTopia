const jwt = require("jwt-simple");
const db = require("../models");
const config = require("../config");
const mongoose = require("mongoose");

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next){
    // User has already had their email and password auth'd
    // We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next){
    // console.log(req.body);
    const userId = req.body.userId;
    const password = req.body.password;

    if(!userId || !password){
        return res.status(422).send({ error: "You must provide User id and Password" });
    }

    // See if a user with the given user id exists
    db.User.findOne({ userId: userId }, function(err, existingUser) {
        if(err) {
            return next(err);
        } 
        // Return error if user id is duplicated
        if(existingUser){
            return res.status(422).send({ error: "User id already in use" });
        }
        // Create and save user record if it is not duplicated
        // db.User.create({
        //     userId: userId,
        //     password: password
        // }).then(function(dbUser){
        //     res.json({ token: tokenForUser(db) });
        // }).catch(function(err){
        //     res.json(err);
        // });  
        const user = new db.User({
            userId: userId,
            password: password
        });
      
        user.save(function(err) {
            if (err) { return next(err); }
            // Repond to request indicating the user was created
            res.json({ token: tokenForUser(user) });
        });
    });
}