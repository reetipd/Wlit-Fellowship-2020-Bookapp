var express = require('express');
var router = express.Router();
var books = require('../resources/books')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book App' , bookList: books}); //index-view ko index , context(we are passing title as bookapp ani books as array)
}); //home page load huda books ko list aucha


// router.get('/reety', function(req, res, next) {
//   res.render('index', { title: 'reety' });
// });

module.exports = router; 
