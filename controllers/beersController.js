const db = require("../models");

module.exports = {
    // db.Beer.findOne({
    //     id: id
    // }).then(function(dbBeer) {
    //     res.json(dbBeer);
    // }).catch(function(err) {
    //     res.json(err);
    // });

    findAll: function(req, res){
        db.Beer.find(req.query).then(dbBeer => res.json(dbBeer)).catch(err => res.status(422).json(err));
    },

    findById: function(req, res){
        db.Beer.findById(req.params.id).then(dbBeer => res.json(dbBeer)).catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        const beer = {
            beerName: req.body.beerName,
            rating: req.body.rating,
            beerType: req.body.beerType,
            breweryName: req.body.breweryName,
            summary: req.body.summary
        };
        db.Beer.create(beer).then(dbBeer => res.json(dbBeer)).catch(err => res.status(422).json(err));
    }    
}

// {
//     findAll: function(req, res){
//         db.Beer
//             .find(req.query).then(dbBeer => res.json(dbBeer)).catch(err => res.status(422).json(err));
//     },
//     findById: function(req, res){
//         db.Beer
//             .findById(req.params.id).then(dbBeer => res.json(dbBeer)).catch(err => res.status(422).json(err));
//     },
//     create: function(req, res){
//         const newBeer = {
//             beerName: req.body.beerName,
//             rating: req.body.rating,
//             beerType: req.body.beerType,
//             breweryName: req.body.breweryName,
//             summary: req.body.summary
//         };
        
//     }
// };