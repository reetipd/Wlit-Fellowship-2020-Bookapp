var express = require('express');
var router = express.Router();

var Users = require('../models/users');

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res,  next){
  //res.send('Login click');
  res.render('loginUser', {title : 'Login-Form', users : Users});
});

router.post('/userLogin', function(req, res, next){
  let users = Users.find({username : req.body.username , password : req.body.password}, function(err,user){
    user_valid = user;
    console.log(user_valid.length);
    l = user.length
    if (l != 0){
      res.render('userProfile',{title : 'User-profile' ,user : req.params.username});
    }
    else{
      console.log("Username and pwd not valid");
      res.redirect('/users/login');
    }
  });
  //let users = Users.find();
  
  console.log(req.body.username);
  console.log(req.body.password);
})

router.get('/register', function(req,res,next){
  res.render('registerUser',{title:'Registration-Form'});
});

router.post('/saveUser',function(req, res, next){
  //res.send('in post wala');
  const users = new Users (req.body); 
  let promise = users.save();
  promise.then( () =>{
    console.log('user saved');
    res.redirect('/users/login');
  })
});

module.exports = router;
