const router = require("express").Router();
const beersController = require("../../controllers/usersController");

router
  .route("/signup")
  .post(usersController.create);

  module.exports = router;