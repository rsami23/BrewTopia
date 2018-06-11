const router = require("express").Router();
const beersRoutes = require("./beers");
const userRoutes = require("./users");

// BT routes
router.use("/beers", beersRoutes);

router.use("/users", userRoutes);

module.exports = router;