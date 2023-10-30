var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about',function(req,res,next){
  let about={
    email:"pranja@rgtu.net",
    username:"pranjalshukla",
    age:20,
    course:"B.tech CSE"
  }
  res.render('about',{about})
})
router.get('/profile',function(req,res){
  let profile=[
        { skill: "Backend", institute: "Sheryians" },
        { skill: "Frontend", institute: "Sheryians" },
        { skill: "Database", institute: "Sheryians" },
    ];
    res.render('profile',{profile})
})
router.get('/profile/:id',function(req,res){

 res.render('explore',{id:req.params.id})
})

router.get('/delete-student', function(req, res) {
  const studentIdToDelete = req.query.id; 
  res.render('deleted-student', { id: studentIdToDelete });
});

module.exports = router;
