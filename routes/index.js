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
router.get('/root.txt', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../root.txt'));
});
router.get('/index', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/index.html');
});
router.get('/boutique', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/boutique.html');
});
router.get('/package', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/package.html');
});
router.get('/hot', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/hot.html');
});
router.get('/product', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/product.html');
});
router.get('/classify', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/classify.html');
});
router.get('/ticket',function(req, res, next){
    res.sendFile(base.getViewPath() +'/ticket.html');
});
router.get('/catid', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/catid.html');
});
router.get('/coupon', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/coupon.html');
});
module.exports = router;