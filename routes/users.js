var express = require('express');

const userController = require("../controllers/user.controller");

var router = express.Router();

/**
 * @Path /users
*/

router.route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/:id")
  .get(userController.findOneById)
  .put(userController.updateOneById)
  .delete(userController.deleteOneById);

module.exports = router;