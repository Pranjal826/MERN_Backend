var express = require('express');
var router = express.Router();
const usermodel=require('../models/userModel')
const session = require('express-session');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
}));
function checkAuthentication(req, res, next) {
  if (req.session.gender && req.session.name) {
    next();
    req.session.destroy()
  } else {
    // User is not authenticated, redirect to the login page
    res.redirect('/login');
  }
}

router.get('/', async (req, res) => {
  try {
    const currentUserGender = req.session.gender;
    const currentUserName = req.session.name;
    
    const allUsers = await usermodel.find();

    const users = allUsers.filter(user => user.name !== currentUserName);

    console.log(currentUserGender);
    res.render('index', { users, currentUserName });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching profiles');
  }
});

router.get('/register',(req,res)=>{
  res.render('register')
})

router.post('/register', async (req, res) => {
      try {
          const user = new usermodel(req.body);
          await user.save();
          res.redirect('/login')
      } catch (err) {
          console.error(err);
          res.status(500).send('Error registering user');
      }
  });
router.get('/login',(req,res)=>{
  res.render('login')
})
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email: email });

    if (user && user.password === password) {
      req.session.gender = user.gender;
      req.session.name = user.name;
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
  }
});

router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/login')
})


  
module.exports = router;
