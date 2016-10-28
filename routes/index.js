var express = require('express');
var router = express.Router();
var login = require('../lib/login.js');
var base = require('./base.js');
var path = require('path');

router.use(base.init);
/* GET home page. */
router.get('/', function(req, res, next) {
    var userAgent = req.get('User-Agent');
    login.addLoginInfo(req.ip,req.hostname,userAgent);
    if(base.isMobile(req)){
        res.sendFile(base.getViewPath() +'/index.html');
    }else{
        res.render('index', { title: 'NodeShop' });
    }

});

module.exports = router;