var express = require('express');
var router = express.Router();
var base = require('./base.js');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');

router.use(base.init);
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
module.exports = router;