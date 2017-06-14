var express = require('express');
var router = express.Router();
var base = require('./base.js');
var path = require('path');
var _ = require('lodash');

router.use(base.init);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render(base.getViewPath() +'/index',base.getCommonParams());
});
router.get('/root.txt', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../root.txt'));
});
/**
 * 首页
 */
router.get('/index', function(req, res, next) {
    res.render(base.getViewPath() +'/index',base.getCommonParams());
});
/**
 * 9块9包邮页面
 */
router.get('/package', function(req, res, next) {
    res.render(base.getViewPath() +'/package',base.getCommonParams());
});
/**
 * 热销排行页面
 */
router.get('/hot', function(req, res, next) {
    res.render(base.getViewPath() +'/hot',base.getCommonParams());
});
/**
 * 分类页面
 */
router.get('/cage', function(req, res, next) {
    var category_id = req.query.category_id;
    var local_vars =  {};
    _.assignIn(local_vars,base.getCommonParams(),{category_id:category_id});
    res.render(base.getViewPath() +'/cage',local_vars);
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