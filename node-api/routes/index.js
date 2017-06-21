var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * @api {get} / get
 * @apiGroup index
 *
 * @apiSuccess {object} result
 */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send({ title: 'Api' });
});

module.exports = router;
