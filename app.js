
/**
 * Module dependencies.
 */

var express = require('express');

/*
 * Build Models
 */
var userModel = require('./model/UserModel');

userModel.createUser();

/*
 * Build Routes.
 */
var indexRoute = require('./routes/IndexRoute');
var userRoute = require('./routes/UserRoute');
var test = require('./routes/TestRoute');

/*
 * Build views from Routes.
 */
var indexObject = indexRoute.createObject(userModel);
var userObject = userRoute.createObject(userModel);

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 19903);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', indexObject.index);
app.get('/users', userObject.list);
app.get('/test',test.test.handleRequest);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
