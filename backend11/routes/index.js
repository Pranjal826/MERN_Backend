var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/profile",function(req,res){
  console.log("Profile");
const username=req.body.email
res.render('profile',{username})
})
router.get("/men",function(req,res){
  const title="Men's Wear"
  res.render('fashion',{title})

})
router.get("/women",function(req,res){
  const title='Womens Wear';
 res.render('fashion',{title})

})
router.get("/back",function(req,res){
  res.redirect("/")
})
module.exports = router;
