var express = require('express');
var router = express.Router();
const POSTS=[]
/* GET home page. */
router.get('/',(req,res)=>{
  res.render('index')
})
router.post("/create-post", function(req, res, next) {
  const post = {
      ...req.body,
      date: new Date(),
      like: 0
  };
  POSTS.push(post);
  res.redirect("/read-post");
});
router.get('/create-post',(req,res)=>{
  res.render('create')
})
router.get("/read-post", function(req, res, next) {
  res.render("read", { posts: POSTS });
});
router.post("/delete-post/:index", function(req, res, next) {
  const index = req.params.index;
  if (index >= 0 && index < POSTS.length) {
      POSTS.splice(index, 1);
  }
  res.redirect("/read-post");
});

router.get("/update-post/:index", function(req, res, next) {
  const index = req.params.index;
  if (index >= 0 && index < POSTS.length) {
      const post = POSTS[index];
      res.render("update", { post, index });
  } else {
      res.redirect("/read-post");
  }
});

router.post("/update-post/:index", function(req, res, next) {
  const index = req.params.index;
  if (index >= 0 && index < POSTS.length) {
      const updatedPost = {
          ...POSTS[index],
          ...req.body,
      };
      POSTS[index] = updatedPost;
  }
  res.redirect("/read-post");
});

router.post("/like-post/:index", function(req, res, next) {
  const index = req.params.index;
  if (index >= 0 && index < POSTS.length) {
      POSTS[index].like++;
  }
  res.redirect("/read-post");
});
module.exports = router;
