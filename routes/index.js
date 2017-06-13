var express = require('express');
var router = express.Router();
var login = require('../lib/login.js');
var base = require('./base.js');
var path = require('path');
var _ = require('lodash');

router.use(base.init);
/* GET home page. */
router.get('/', function(req, res, next) {
    var userAgent = req.get('User-Agent');
    //login.addLoginInfo(req.ip,req.hostname,userAgent);
    res.render(base.getViewPath() +'/index',base.getCommonParams());
});
router.get('/root.txt', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../root.txt'));
});
router.get('/index', function(req, res, next) {
    res.render(base.getViewPath() +'/index',base.getCommonParams());
});
router.get('/boutique', function(req, res, next) {
    res.render(base.getViewPath() +'/boutique',base.getCommonParams());
});
router.get('/package', function(req, res, next) {
    res.render(base.getViewPath() +'/package',base.getCommonParams());
});
router.get('/hot', function(req, res, next) {
    res.render(base.getViewPath() +'/hot',base.getCommonParams());
});
router.get('/product', function(req, res, next) {
    res.render(base.getViewPath() +'/product',base.getCommonParams());
});
router.get('/classify', function(req, res, next) {
    res.render(base.getViewPath() +'/classify',base.getCommonParams());
});
router.get('/ticket',function(req, res, next){
    res.render(base.getViewPath() +'/ticket',base.getCommonParams());
});
router.get('/catid', function(req, res, next) {
    res.render(base.getViewPath() +'/catid',base.getCommonParams());
});
router.get('/cage', function(req, res, next) {
    var category_id = req.query.category_id;
    var local_vars =  {};
    _.assignIn(local_vars,base.getCommonParams(),{category_id:category_id});
    res.render(base.getViewPath() +'/cage',local_vars);
});
router.get('/coupon', function(req, res, next) {
    res.render(base.getViewPath() +'/coupon',base.getCommonParams());
});
router.get('/ensure', function(req, res, next) {
    res.render(base.getViewPath() +'/ensure',base.getCommonParams());
});
router.get('/issue', function(req, res, next) {
    res.render(base.getViewPath() +'/issue',base.getCommonParams());
});
router.get('/redpacket', function(req, res, next) {
    res.render(base.getViewPath() +'/redpacket',base.getCommonParams());
});
module.exports = router;