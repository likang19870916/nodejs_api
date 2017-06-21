var express = require('express');
var router = express.Router();

/* GET users listing. */

/**
 * @api {get} /users get
 * @apiGroup user
 *
 * @apiSuccess {Object} result
 */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send([{result:'respond with a resource'}]);
});

module.exports = router;
