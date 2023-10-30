var express = require('express');
var router = express.Router();
const userModel=require('../models/userModel')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',async(req,res)=>{
  try{
    const User=new userModel(
      {...req.body}
    )
    await User.save()
    res.redirect('/read')
  }catch(err){
    console.log(err)
  }
})
router.get('/read',async(req,res)=>{
  // Show the data from database using try catch
  try{
    const users = await userModel.find();
    res.render('read', { users });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('An error occurred while fetching user data');
  }

})
router.get('/update/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId); // Fetch the user's data from the database
    res.render('update', { user });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('An error occurred while fetching user data');
  }
});

router.post('/update/:id', async (req, res) => {
  const userId = req.params.id;
  

  try {
    await userModel.findByIdAndUpdate(userId,req.body); 
    res.redirect('/read'); 
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('An error occurred while updating user data');
  }
});
router.get('/delete/:id',async(req,res)=>{
  const userId=req.params.id
  try{
    await  userModel.findByIdAndDelete({_id:userId})
    res.redirect('/read')
  }
  catch(err){
    console.log(err)
  }
})
// Search user by name

router.get('/search', async (req, res) => {
    const name = req.query.name;

    try {
        const users = await userModel.find({ name: name });
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while searching for users' });
    }
});



module.exports = router;
