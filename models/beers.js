const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    beerName: { type: String, required: true },
    rating: { type: Number, required: true },
    beerType: { type: String, required: true },
    breweryName: { type: String, required: true },
    summary: { type: String, required: true }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;