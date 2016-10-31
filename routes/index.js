var express = require('express');
var router = express.Router();
var login = require('../lib/login.js');
var base = require('./base.js');
var path = require('path');

router.use(base.init);
/* GET home page. */
router.get('/', function(req, res, next) {
    var userAgent = req.get('User-Agent');
    //login.addLoginInfo(req.ip,req.hostname,userAgent);
    res.sendFile(base.getViewPath() +'/index.html');

});

module.exports = router;