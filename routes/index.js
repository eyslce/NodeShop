var express = require('express');
var router = express.Router();
var login = require('../lib/login.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var userAgent = req.get('User-Agent');
    console.log(req.hostname);
    console.log(req.ip);
    console.log(userAgent);
    login.addLoginInfo(req.ip,req.hostname,userAgent);
    res.render('index', { title: 'NodeShop' });
});

module.exports = router;