var express = require('express');
var router = express.Router();
var base = require('./base.js');
var path = require('path');
var baseApi = require('../lib/baseApi.js');

router.use(base.init);
router.get('/getlist', function(req, res, next) {
    baseApi.init().getItem({
        'q':'女装',
        'fields': 'num_iid',
        'platform':'1',
        'page_no':req.query.page_no,
        'page_size':base.page_size
    },function(data){
        var items = data.results.n_tbk_item;
        var num_ids = [];
        for(var i in items){
            num_ids.push(items[i].num_iid);
        }
        baseApi.init().getItemInfo({
            num_iids:num_ids.toString()
        },function(detail_data){
            res.json(detail_data);
        });

    });

});
module.exports = router;