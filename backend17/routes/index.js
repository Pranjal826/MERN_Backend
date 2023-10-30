var express = require('express');
var router = express.Router();
const User=require('../models/userModel')
/* GET home page. */
const passport=require('passport')
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(User.authenticate()));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup',(req,res)=>{
  res.render('signup')
})
router.get('/login',(req,res)=>{
  res.render('login')
})

router.post('/singup',(req,res)=>{
  User.register(new User({username:req.body.username}),req.body.password)
  .then((user)=>{
    passport.authenticate('local')(req,res,()=>{
      res.redirect('/login')
    })
  })
  .catch((err)=>{
    console.log(err)
  })

  
}
)
router.post('/login',passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/login'
}),(req,res)=>{
  res.redirect('/')
}
)
module.exports = router;
