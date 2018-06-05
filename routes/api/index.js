const router = require("express").Router();
const beerRoutes = require("./beers");
const userRoutes = require("./users");

// Book routes
router.use("/beers", beerRoutes);
router.use("/signup", userRoutes)

module.exports = router;