var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let admin='Pranjal Shukla'
  let subjectlist=["English","Hindi","Maths","Science"]
  let user=[{
    id:"1234",
    name:"Pranjal",
    skill:"Front-end"
  }
  ,{
    id:"1235",
    name:"Shukla",
    skill:"Back-end"
  }
]
let profile={
  name:"Pranjal Shukla",
  age:21,
  skill:"Full-stack"
}
res.render("index",{myname:admin,subjects : subjectlist,users:user,profile:profile});
})
router.get('/about',function(req,res){
  res.render('about')
})
router.get('/contact',function(req,res){
  res.render('contact')
})
module.exports = router;
