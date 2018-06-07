const db = ("../models/");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.route("/beers").get(function(req, res) {

});

router.route("/beers").post(function(req, res) {
    var beer = new db.Beer({
        beerName: beerName ,
        rating: rating,
        beerType: beerType,
        breweryName: breweryName,
        summary: summary
    });

    beer.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send(json);
        }
    });       
});

module.exports = router;


