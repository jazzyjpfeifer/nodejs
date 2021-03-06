var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');
//Models
var Author = require('./app/models/author'),
    Category = require('./app/models/category'),
    Post = require('./app/models/posts');

//require routes
var authors = require('./routes/authors'),
    categories = require('./routes/categories'),
    content_types = require('./routes/content_types'),
    index = require('./routes/index'),
    users = require('./routes/users'),
    posts = require('./routes/posts');

mongoose.Promise = global.Promise;
var db = mongoose.connection;
var url = 'mongodb://localhost/bi-steps';
mongoose.connect(url);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use('/authors', authors);
app.use('/categories', categories);
app.use('/content_types', content_types);
app.use('/', index);
app.use('/users', users);
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
