var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var joi = require('joi'); 

var topics = require('./backend/routes/topics');
var book = require('./backend/routes/book');
var articles = require('./backend/routes/articles');
var users = require('./backend/routes/users');

var mongoose = require('mongoose');
//mongoose.promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/InterviewTopics')
    .then(() => console.log("Now connected to mongodb"))
    .catch(err => console.error("Something went wrong trying to connect to Mongo", err));
// mongoose.connect('mongodb://Mrdongol:Mrdongol123@cluster1-shard-00-00-ojng8.mongodb.net:27017,cluster1-shard-00-01-ojng8.mongodb.net:27017,cluster1-shard-00-02-ojng8.mongodb.net:27017/InterviewTopics?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin&retryWrites=true');
var db = mongoose.connection;
    //{ mongoClient: true, promiseLibrary: require('bluebird') })
    //.then(() => console.log('connection successful'))
    //.catch((err) => console.error(err));

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/topics', topics);
app.use('/book', book);
app.use('/articles', articles);
app.use('/users', users);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler 
app.use(function (err, req, res, next) {
   //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;