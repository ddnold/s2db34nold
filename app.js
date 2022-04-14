var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Farmhand = require("./models/farmhands");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var farmhandsRouter = require('./routes/farmhands');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose'); 
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 

async function recreateDB(){ 
  // Delete everything 
  await Farmhand.deleteMany(); 
 
  let instance1 = new 
  Farmhand({name:'Jerry', age:21, height:68});
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  });
  instance1 = new
  Farmhand({name:'Johnny', age:18, height:54});
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second object saved") 
  });
  instance1 = new
  Farmhand({name:'Chad', age:24, height:76});
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third object saved") 
  });
} 
let reseed = true; 
if (reseed) { recreateDB();} 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/farmhands', farmhandsRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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