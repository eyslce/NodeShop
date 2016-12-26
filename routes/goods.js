var express = require('express');
var router = express.Router();
var base = require('./base.js');
var path = require('path');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');

router.use(base.init);
router.get('/getlist', function (req, res, next) {
    var category = req.query.category;
    var platform = base.isMobile() ? 2:1;
    var pre = base.isMobile() ? 'wx':'pc';
    baseApi.init().getItemFavoritesUatm({
        'page_size': base.page_size,
        'page_no': req.query.page_no,
        'favorites_id': config.goodsLibrary[category].favorites_id,
        'adzone_id': config.adzone_id,
        'unid':pre+category,
        'platform':platform
    }, function (goods_data) {
        res.json(_.defaults(goods_data, {page_size: base.page_size}));
    });
});
module.exports = router;