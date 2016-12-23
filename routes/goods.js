var express = require('express');
var router = express.Router();
var base = require('./base.js');
var path = require('path');
var baseApi = require('../lib/baseApi.js');
var config = require('../config.js');
var _ = require('lodash');

router.use(base.init);
router.get('/getlist', function(req, res, next) {
    baseApi.init().getFavoritesUatm({
        'page_no':1,
        'page_size':100
    },function(data){
        console.dir(data,{depth:5});
        var items = data.results.tbk_favorites;
        var favorites_id = items.shift().favorites_id;
        baseApi.init().getItemFavoritesUatm({
            'page_size':base.page_size,
            'page_no':req.query.page_no,
            'favorites_id':2418800,
            'adzone_id':config.adzone_id
        },function(goods_data){
            console.log(goods_data);
            res.json(_.defaults(goods_data, {page_size:base.page_size}));
        });
    });

});
module.exports = router;