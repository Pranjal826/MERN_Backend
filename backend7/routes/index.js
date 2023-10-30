var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register',function(req,res,next){
  const response=res.json(req.query)
res.render('registration',response)
})
module.exports = router;
