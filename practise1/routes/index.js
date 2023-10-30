var express = require('express');
var router = express.Router();
const tasks = [];
router.get('/', (req, res) => {
  res.render('index');
});
router.get('/about',(req,res)=>{
  res.render('about')
})
router.get('/create', (req, res) => {
  res.render('create');
});

router.get('/tasks', (req, res) => {
  res.render('tasks', { tasks });
});

router.post('/tasks', (req, res) => {
  const newTask = req.body
  tasks.push(newTask);
  res.redirect('/tasks'); 
});

router.get('/update/:index', (req, res) => {
  const index = req.params.index;
    const update = tasks[index];
    res.render('update', { task: update,idx: index}); // Pass 'task' variable
});

router.post('/update/:index', (req, res) => {
    tasks[req.params.index] = req.body;
  res.redirect('/tasks');
});
router.get('/delete/:index', (req, res) => {
  const index = req.params.index;
    tasks.splice(index,1);
  res.redirect('/tasks');
});



module.exports = router;
