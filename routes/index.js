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
    res.render(base.getViewPath() +'/index');
});
router.get('/root.txt', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../root.txt'));
});
router.get('/index', function(req, res, next) {
    res.render(base.getViewPath() +'/index');
});
router.get('/boutique', function(req, res, next) {
    res.render(base.getViewPath() +'/boutique');
});
router.get('/package', function(req, res, next) {
    res.render(base.getViewPath() +'/package');
});
router.get('/hot', function(req, res, next) {
    res.render(base.getViewPath() +'/hot');
});
router.get('/product', function(req, res, next) {
    res.render(base.getViewPath() +'/product');
});
router.get('/classify', function(req, res, next) {
    res.render(base.getViewPath() +'/classify');
});
router.get('/ticket',function(req, res, next){
    res.render(base.getViewPath() +'/ticket');
});
router.get('/catid', function(req, res, next) {
    res.render(base.getViewPath() +'/catid');
});
router.get('/coupon', function(req, res, next) {
    res.render(base.getViewPath() +'/coupon');
});
router.get('/ensure', function(req, res, next) {
    res.render(base.getViewPath() +'/ensure');
});
router.get('/issue', function(req, res, next) {
    res.sendFile(base.getViewPath() +'/issue');
});
module.exports = router;