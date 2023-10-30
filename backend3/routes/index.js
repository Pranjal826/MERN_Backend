var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/contact",function(req,res,next){
  res.render("reachus");
})
router.get("/about",function(req,res,next){
  res.render("about")
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
