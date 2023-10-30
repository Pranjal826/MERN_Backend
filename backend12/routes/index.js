var express = require('express');
var router = express.Router();
var country=require('country-list')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.get('/register',function(req,res){
  const countryname=country.getName();
  res.render('./partials/register',{countryname})
})
router.post('/profile',function(req,res){
  const name=req.body.name
  const email=req.body.email
  res.render('./partials/profile',{name:name,email:email})
})

module.exports = router;
