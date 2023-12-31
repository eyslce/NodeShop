var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var goods = require('./routes/goods');
var mobile = require('./routes/mobile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//默认路由
app.use('/', routes);
app.use('/goods', goods);
app.use('/mobile',mobile);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json( {
            message: err.message,
            error: err
        });

    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    var category = req.query.category;
    if(!category){
        category = 'index';
    }
    res.status(err.status || 500);
    res.render('ticket_pc/404.ejs',{category:category});
});


module.exports = app;
