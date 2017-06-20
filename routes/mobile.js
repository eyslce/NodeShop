var express = require('express');
var router = express.Router();
var base = require('./base.js');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');
var goodsRequest = require('../lib/goodsRequest.js');

/**
 * 移动端路由
 * 根路径是/mobile
 */
router.use(base.init);
/**
 * 移动端首页
 * 路径：/mobile/index
 */
router.get('/index', function(req, res, next) {
    //console.log(base.getViewPath());
    //渲染视图
    res.render(base.getViewPath() + '/index',base.getCommonParams());
});

router.get('/redpacket', function(req, res, next) {
    //渲染视图
    res.render(base.getViewPath() + '/redpacket',base.getCommonParams());
});

module.exports = router;