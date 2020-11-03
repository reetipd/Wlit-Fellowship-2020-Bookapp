
var express = require('express');
var books = require('../resources/books');
var router = express.Router();
let Books = require('../models/books');

//router for adding new book
router.get('/add', function (req, res, next) {
    res.render('addBooks', { //addBooks.ejs 
        title: 'Add book',   
    });
});

//new router for posting data
router.post('/save', function (req, res, next) {
    //console.log('In save function...', req.body);
    //books.push({...req.body, _id: `00${books.length + 1}`});
    
    const book = new Books(req.body); //naya instance banauncha 
    let promise = book.save(); //book.save () returns promise
    promise.then( () => {
        console.log('Book Added');
        res.redirect('/');
    })
    
    //res.send("Save");
});

//new router for deleting book
router.get('/remove/:id',function (req,res){ //:id or _id jun ne ok.
    //console.log(req.params.id);
    Books.remove({ _id: req.params.id }, function() {
        res.redirect('/');
    })

    // console.log(req.params.index);
    // books.splice(req.params.index, 1); //(books array ko index,delete count)
    // res.redirect('/');
});

// router.get('/remove/:_id',function(req,res){
//     console.log(req.params._id);
// }) //:_id - book wala id -001,002...


router.get('/edit/:id', function(req,res) {
    // const book = books.find((book) => book._id === req.params._id );
    // //console.log('edit....',book);
    // res.render('editBooks', {
    //      'title': 'Edit book',
    //      book
    // });

    Books.findOne({_id : req.params.id}, function (err, book){
        res.render('editBooks', {title : 'Edit book', book : book});
    })
});

router.post('/saveedit/:id', function (req,res) {
    Books.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, function(err, book) {
        console.log(book);
        res.redirect('/');
    })

    
});

// router.post('/edit/:_id/editsave', function (req, res, next) {
//     //console.log('In editsave function...', req.body);
//     //const editBook = req.body;
//     // console.log(req.params._id)
//     // books.forEach((book) => {
//     //     if(book._id === req.params._id){
//     //         console.log(book._id);
//     //         //console.log(req.body.title)
//     //         book._id = req.params._id;
//     //         book.title = req.body.title;
//     //         book.author = req.body.author;
//     //         book.description = req.body.description;
//     //         book.genre = req.body.genre;
//     //     }
//     // });
//     const indexId = books.findIndex((x) => x._id === req.params._id );
//     //console.log(indexId);

//     books.splice(indexId, 1, {...req.body,_id:req.params._id});

//     res.redirect('/');
//     //res.send("Save");
// });
module.exports = router;

