var express = require('express');
var router = express.Router();
var fs=require("fs")

/* GET home page. */
function readdata(){
  return JSON.parse(fs.readFileSync("./public/register.json", "utf-8"));

}
function write(data){
  fs.writeFileSync("./public/register.json",JSON.stringify(data),"utf-8");
}
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register',(req,res)=>{
  res.render('register')
})
const x=readdata()
router.post('/register',(req,res)=>{
x.push(req.body);
fs.writeFileSync("./public/register.json", JSON.stringify(x));
res.redirect('/show')
})
router.get('/show',(req,res)=>{
  res.render('show',{read: readdata()})
})
router.get('/update/:index',(req,res)=>{
  const idx=req.params.index
  const data = readdata()[idx];

  res.render('update',{idx,data})
})
router.post('/update/:index',(req,res)=>{
  let x = readdata();
  x[req.params.index] = req.body;
  write(x);
  res.redirect("/show");
})
router.get('/delete/:index',(req,res)=>{
  x.splice(req.params.index,1);
  write(x);
  res.redirect("/show");

})
module.exports = router;
