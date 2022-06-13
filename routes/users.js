var express = require('express');
var router = express.Router();

/**
 * @Path /users
*/


router.get('/', function(req, res, next) {
  console.log(req);
  res.status(404).json({ message: 'respond with a resource' });
});

module.exports = router;
