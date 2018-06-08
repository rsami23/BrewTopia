const db = ("../models/beers");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const beersController = require("../controllers/beersController");

// Get a list of beers frim db
router.route("/beers")
    .get(beersController.findAll);

// Find a beer by id
router.route("/beers/:id")
    .get(beersController.findById);

// Add a new beer to the db
router.route("/beers")
    .post(beersController.create);

    // db.Beer.create({
    //     beerName: req.body.beerName,
    //     rating: req.body.rating,
    //     beerType: req.body.beerType,
    //     breweryName: req.body.breweryName,
    //     summary: req.body.summary
    // }).then(function(dbBeer){
    //     res.json({dbBeer});
    // }).catch(function(err){
    //     res.json(err);
    // });  

    // var beer = new db.Beer({
    //     beerName: req.body.beerName ,
    //     rating: req.body.rating,
    //     beerType: req.body.beerType,
    //     breweryName: req.body.breweryName,
    //     summary: req.body.summary
    // });   
    // beer.save(function(err) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(json);
    //     }
    // });  


// Update beer in the db
// router.put("/beers/:id", function(req, res) {
//     res.send({ type: "PUT" });
// });

// // Delete a beer fmo, the db
// router.delete("/beers/:id", function(req, res) {
//     res.send({ type: "DELETE" });
// });

module.exports = router;


