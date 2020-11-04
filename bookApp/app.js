var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const books = require('./resources/books'); //hamle rakheko list of books bhako file
var booksRouter = require('./routes/books'); //importing the router-add/smthn else from routes
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/bookDB',   //database name: bookDB
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() => { console.log('connected to db') });

//mongoose.createConnection('mongodb://localhost/userDB',{ useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log('userdb')});


//bookDB vanne db banaune

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/books',booksRouter);  //books/add or books/smthelse auda will use this path
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
