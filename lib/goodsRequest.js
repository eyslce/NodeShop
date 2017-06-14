var config = require('../config.js');
var _ = require('lodash');
var GoodsService = require('../service/GoodsService.js');

function goodsRequest() {
}


/**
 * 处理商品搜索请求
 * @param req
 * @param res
 * @param view_name
 */
goodsRequest.prototype.handle = function (req, res, view_name,commonParams) {
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
    var page_no = parseInt(req.query.page_no);
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
    var root_path = commonParams.root_path?commonParams.root_path:'';
    var baseUrl = root_path+req.path + '?' + params.join('&');
    GoodsService.getGoodsList(where, limit, offset, order, function (count, rows) {
        var total_page = Math.ceil(count / limit);
        var result = {
            pre_page:page_no-1>=1?page_no-1:1,
            next_page:page_no+1>total_page?total_page:page_no+1,
            total_page: total_page,
            page_no: page_no,
            total_num: count,
            page_size: limit,
            data: []
        };
        for (var i in rows) {
            var obj = rows[i].dataValues;
            obj.click_url = config.ticket_and_goods_url + 'activityId=' + obj.ticket_id + '&pid=' + config.pid + '&itemId=' + obj.goods_id;
            result.data.push(obj);
        }
        var local_vars = {};
        _.assignIn(local_vars,commonParams,{
            baseUrl: baseUrl,
            sort_name: sort_name,
            serach_name: serach_name,
            result: result
        });
        //渲染视图
        res.render(commonParams.view_path + '/' + view_name, local_vars);
    })
};
module.exports = new goodsRequest();