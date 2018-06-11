const db = ("../models/beers");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const beersController = require("../../controllers/beersController");

// Get a list of beers frim db
router.route("/beers")
    .get(beersController.findAll);

// Find a beer by id
router.route("/beers/:id")
    .get(beersController.findById);

// Add a new beer to the db
router.route("/beers")
    .post(beersController.create);

module.exports = router;


