var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * @api {get} /api/images get
 * @apiGroup images
 *
 * @apiSuccess {string} result
 */
router.get('/images', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send({ message: "第一個API!"});
});
/**
 * @api {post} /api/images post
 * @apiGroup images
 *
 * @apiParam {Int} id
 * @apiParam {String} user
 * @apiParam {String} email
 *
 * @apiSuccess {Object} result
 *
 */
router.post('/images',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(isNaN(req.body.id)){
        res.send({
            message:'Id is not a number.'
        })
        return false;
    }
    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-zd]{2,5}$/;
    if(!reg.test(req.body.email)){
        res.send({
            message:'Email had an incorrect format.'
        })
        return false;
    }
    res.send({
        id:req.body.id,
        user:req.body.user,
        email:req.body.email
    });
})

module.exports = router;
