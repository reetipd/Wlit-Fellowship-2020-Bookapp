
var express = require('express');
const books = require('../resources/books');
var router = express.Router();

router.get('/add', function (req, res, next) {
    res.render('addBooks', { //addBooks.ejs 
        title: 'Add book',   
    });
});

router.post('/save', function (req, res, next) {
    // res.render('index', {
    //     title: 'Book App', bookList : books
    // });
    //res.render('index', { title: 'Book App' , bookList: books}); //index-view ko index , context
    res.send("Save");
});

module.exports = router;

