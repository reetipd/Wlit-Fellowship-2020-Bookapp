var express = require('express');
var router = express.Router();
var books = require('../resources/books')
let Books = require('../models/books')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   Books.find({}, function(err, books) {
//     if (!err) {
//       res.render('index', { title: 'Book App', bookList: books });
//     } else {
//       console.log('error', err);
//     }
//   })

//   //res.render('index', { title: 'Book App' , bookList: books}); //index-view ko index , context(we are passing title as bookapp ani books as array)
// }); //home page load huda books ko list aucha

router.get('/', async function(req, res, next) {
  let books = await Books.find();
  res.render('index', { title: 'Book App', bookList: books });

  //res.render('index', { title: 'Book App' , bookList: books}); //index-view ko index , context(we are passing title as bookapp ani books as array)
});

// router.get('/reety', function(req, res, next) {
//   res.render('index', { title: 'reety' });
// });

module.exports = router; 
