const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.post("/signup", usersController.create);

module.exports = router;