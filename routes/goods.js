var express = require('express');
var router = express.Router();
var base = require('./base.js');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');
var goodsRequest = require('../lib/goodsRequest.js');


router.use(base.init);
/**
 *  路径：/goods/getlist
 *  获取阿里妈妈选品库商品
 */
router.get('/package', function (req, res, next) {
    var category = req.query.category;
    if(!config.goodsLibrary[category]){
        category = 'index';
    }
    var platform = base.isMobile() ? 2:1;
    var pre = base.isMobile() ? 'wx':'pc';
    //每页分页数
    var limit = config.page_size;
    //第几页
    var page_no = parseInt(req.query.page_no);
    if (isNaN(page_no)) {
        page_no = 1;
    }
    var params = [];
    var keys = Object.keys(req.query);
    for (var i in keys) {
        //过滤不需要的参数
        if (keys[i] != 'page_no') {
            params.push(keys[i] + '=' + req.query[keys[i]]);
        }
    }
    var baseUrl = '/goods'+req.path + '?' + params.join('&');
    baseApi.init().getItemFavoritesUatm({
        'page_size': limit,
        'page_no': page_no,
        'favorites_id': config.goodsLibrary[category].favorites_id,
        'adzone_id': config.adzone_id,
        'unid':pre+category,
        'platform':platform
    }, function (goods_data) {
        for(var i in goods_data.results.uatm_tbk_item){
            //过滤掉已经失效的商品
            if(!goods_data.results.uatm_tbk_item[i].click_url){
                goods_data.results.uatm_tbk_item.splice(i,1);
            }
        }
        var total_page = Math.ceil(goods_data.total_results / limit);
        var result = {
            pre_page:page_no-1>=1?page_no-1:1,
            next_page:page_no+1>total_page?total_page:page_no+1,
            total_page: total_page,
            page_no: page_no,
            total_num: goods_data.total_results,
            page_size: limit,
            data: goods_data.results.uatm_tbk_item
        };
        var local_vars = {};
        _.assignIn(local_vars,base.getCommonParams(),{
            baseUrl: baseUrl,
            result: result
        });
        //渲染视图
        res.render(base.getViewPath() + '/package', local_vars);
    });
});

/**
 * 路径：/goods/search
 * 商品搜索页
 */
router.get('/search', function(req, res, next) {
    goodsRequest.handle(req,res,'search',_.assignIn({},base.getCommonParams(),{root_path:'/goods'}));
});
module.exports = router;