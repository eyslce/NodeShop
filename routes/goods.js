var express = require('express');
var router = express.Router();
var base = require('./base.js');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');
var GoodsService = require('../service/GoodsService.js');

router.use(base.init);
/**
 *  路径：/goods/getlist
 *  获取阿里妈妈选品库商品
 */
router.post('/getlist', function (req, res, next) {
    var category = req.body.category;
    if(!config.goodsLibrary[category]){
        category = 'index';
    }
    var platform = base.isMobile() ? 2:1;
    var pre = base.isMobile() ? 'wx':'pc';
    baseApi.init().getItemFavoritesUatm({
        'page_size': base.page_size,
        'page_no': req.body.page_no,
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
        res.json(_.defaults(goods_data, {page_size: base.page_size}));
    });
});

/**
 * 路径：/goods/getTicketlist
 * 获取优惠卷商品列表
 */
router.post('/getTicketList',function(req, res, next){
    var where = {};
    //每页分页数
    var limit = base.page_size;
    //第几页
    var pageNo = parseInt(req.body.page_no);
    if(isNaN(pageNo)){
        pageNo = 1;
    }
    var category_id = req.body.category_id;
    if(0 != category_id){
        where.gid = category_id;
    }
    var offset = (pageNo-1)*limit;
    var orderBy = req.body.orderBy;
    var direction = req.body.direction;
    var order = null;
    if(orderBy&&direction){
        order = [[orderBy,direction]];
    }
    GoodsService.getGoodsList(where,limit,offset,order,function(count,rows){
        var result = {total_page:count,page_size:limit,data:[]};
        for(var i in rows){
            var obj = rows[i].dataValues;
            obj.click_url = config.ticket_and_goods_url+'activityId='+obj.ticket_id+'&pid=mm_29574340_19906004_68784612&itemId='+obj.goods_id;
            result.data.push(obj);
        }
        res.json(result);
    })
});

module.exports = router;