var express = require('express');
var router = express.Router();

/**
 * @Path /
*/


router.get('/', function(req, res, next) {
  res.json({ message: "this is /" });
});
router.get('/test', function(req, res, next) {
  res.json({ message: "this is /test" });
});

module.exports = router;
