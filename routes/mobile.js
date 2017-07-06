var express = require('express');
var router = express.Router();
var base = require('./base.js');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');
var GoodsService = require('../service/GoodsService.js');

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
    //渲染视图
    res.render(base.getViewPath() + '/index',base.getCommonParams());
});

/**
 * 分类页面
 * 路径：/mobile/cage
 */
router.get('/cage', function(req, res, next) {
    //渲染视图
    res.render(base.getViewPath() + '/cage',base.getCommonParams());
});
/**
 * 热销排行页面
 */
router.get('/hot', function(req, res, next) {
    res.render(base.getViewPath() + '/hot',base.getCommonParams());
});
/**
 *
 */
router.post('/package', function (req, res, next) {
    var category = req.body.category;
    if(!config.goodsLibrary[category]){
        category = 'index';
    }
    var platform = base.isMobile() ? 2:1;
    var pre = base.isMobile() ? 'wx':'pc';
    baseApi.init().getItemFavoritesUatm({
        'page_size': config.page_size,
        'page_no': req.body.page_no,
        'favorites_id': config.goodsLibrary[category].favorites_id,
        'adzone_id': config.adzone_id,
        'unid': pre + category,
        'platform':platform
    }, function (goods_data) {
        for(var i in goods_data.results.uatm_tbk_item){
            //过滤掉已经失效的商品
            if(!goods_data.results.uatm_tbk_item[i].click_url){
                goods_data.results.uatm_tbk_item.splice(i,1);
            }
        }
        res.json(_.assignIn({},goods_data, {page_size: config.page_size}));
    });
});

/**
 * 获取商品列表
 */
router.post('/getList', function (req, res, next) {
    var where = {};
    var serach_name = req.query.search_name;
    if (typeof(serach_name) != 'undefined' && serach_name != null) {
        where.title = {$like: '%' + serach_name + '%'};
    }
    var is_tmall = req.query.is_tmall;
    if (typeof(is_tmall) != 'undefined' && is_tmall != null) {
        where.is_tmall = is_tmall;
    }
    var sort_name = req.query.sort_name;
    if (typeof(sort_name) == 'undefined' || sort_name == null) {
        sort_name = 'all';
    }
    var category_id = req.query.category_id;
    if(typeof(category_id) != 'undefined' && category_id != null && 0 != category_id){
        where.gid = category_id;
    }
    //每页分页数
    var limit = config.page_size;
    //第几页
    var page_no = parseInt(req.body.page_no);
    if (isNaN(page_no)) {
        page_no = 1;
    }
    var offset = (page_no - 1) * limit;
    var orderBy = req.query.orderBy;
    var direction = req.query.direction;
    var order = null;
    if (orderBy && direction) {
        order = [[orderBy, direction]];
    }
    var params = [];
    var keys = Object.keys(req.query);
    for (var i in keys) {
        //过滤不需要的参数
        if (keys[i] != 'page_no') {
            params.push(keys[i] + '=' + req.query[keys[i]]);
        }
    }
    var queryStr = params.join('&');
    GoodsService.getGoodsList(where, limit, offset, order, function (count, rows) {
        var total_page = Math.ceil(count / limit);
        var result = {
            queryStr:queryStr,
            total_page: total_page,
            page_no: page_no,
            data: []
        };
        for (var i in rows) {
            var obj = rows[i].dataValues;
            obj.click_url = config.ticket_and_goods_url + 'activityId=' + obj.ticket_id + '&pid=' + config.pid + '&itemId=' + obj.goods_id;
            result.data.push(obj);
        }
        res.json(result);
    })
});

router.get('/redpacket', function(req, res, next) {
    //渲染视图
    res.render(base.getViewPath() + '/redpacket',base.getCommonParams());
});
router.get('/search', function(req, res, next) {
    //渲染视图
    res.render(base.getViewPath() + '/search',base.getCommonParams());
});

module.exports = router;