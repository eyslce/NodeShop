var express = require('express');
var router = express.Router();
var base = require('./base.js');
var path = require('path');
var _ = require('lodash');
var goodsRequest = require('../lib/goodsRequest.js');

router.use(base.init);
/* GET home page. */
router.get('/', function(req, res, next) {
    if(base.isMobile()){
        res.redirect('/mobile/index');
    }else{
        goodsRequest.handle(req,res,'index',base.getCommonParams());
    }
});
router.get('/root.txt', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../root.txt'));
});
/**
 * 首页
 */
router.get('/index', function(req, res, next) {
   goodsRequest.handle(req,res,'index',base.getCommonParams());
});

/**
 * 热销排行页面
 */
router.get('/hot', function(req, res, next) {
    goodsRequest.handle(req,res,'hot',base.getCommonParams());
});
/**
 * 分类页面
 */
router.get('/cage', function(req, res, next) {
    goodsRequest.handle(req,res,'cage',base.getCommonParams());
});
/**
 * 底部说明页面
 */
router.get('/issue', function(req, res, next) {
    var issue_id = req.query.issue_id;
    var loca_vars = {};
    _.assignIn(loca_vars,base.getCommonParams(),{issue_id:issue_id});
    res.render(base.getViewPath() +'/issue',loca_vars);
});
/**
 * 现金红包页面
 */
router.get('/redpacket', function(req, res, next) {
    res.render(base.getViewPath() +'/redpacket',base.getCommonParams());
});
module.exports = router;