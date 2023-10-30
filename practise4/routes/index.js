const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const Item=require('../models/userModel')

router.post('/items', (req, res) => {
  const newItem = new Item({
    ...req.body
  });
  newItem.save();
  res.redirect('/');
});
router.get('/create',(req,res)=>{
    res.render('create')
})
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({});
    res.render('index', { items: items });
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred.');
  }
});



router.get('/update/:id',async (req,res)=>{
  try{
    const item=await Item.findById(req.params.id)
    // console.log(item)
    if(!item){
      return  res.status(401).json("no such id")
      }else{
        res.render('update',{item} )
        }}catch(e){console.log(`Error:${e}`)}
        
})
router.post('/update/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id,req.body);
  

    res.redirect('/');
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send('An error occurred.');
  }
});

// Delete
router.get('/delete/:id', async(req, res) => {
  const idx=req.params.id
  try {
    const deletedItem =await  Item.findByIdAndDelete(idx);
    if (!deletedItem) {
      return res.status(404).send('Item not found');
    }
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred.');
  }
});
router.post('/search',async function(req,res){
  const search=req.body.search
  try{
    const items=await Item.find({_id:search})
    res.render('index',{items})
  }catch(e){
    console.log(`Error:${e}`)
  }
})
module.exports = router;