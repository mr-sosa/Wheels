const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const { connect } = require('./lib/mongo');
connect();

var indexRouter = require('./routes/index');
var usersRouter = require('./modules/users/router');
var tripsRouter = require('./modules/trips/router');
var authRouter = require('./modules/auth/router');
const { checkToken } = require('./middlewares/jwt-validator');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/v1', indexRouter);
app.use('/v1/auth', authRouter);
app.use('/v1/users', checkToken, usersRouter);
app.use('/v1/trips', checkToken, tripsRouter);
//app.use('/v1/trips', tripsRouter);

app.get("*",(req,res)=>{
  console.log(path.join(__dirname, "front/build/index.htmml"))
  res.sendFile(path.join(__dirname, 'front/build/index.html'));
}); 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;
