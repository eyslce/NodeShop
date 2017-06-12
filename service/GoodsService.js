/**
 * 商品业务逻辑类
 */
var _ = require('lodash');
var model = require('../models/model.js');
function GoodsService() {

}

/**
 * 获取商品列表
 */
GoodsService.prototype.getGoodsList = function (where,limit,offset,order,callback) {
    var where = _.defaults(where,{ticket_time:{gt:new Date().toLocaleString()}});
    model.nt_goods
        .findAndCountAll({
            attributes:['id', 'source', 'p_goods_id', 'goods_id', 'title', 'd_title', 'pic', 'cid', 'org_price', 'price', 'is_tmall', 'sales_num', 'dsr', 'seller_id', 'commission_plan', 'commission_queqiao', 'plan_link', 'plan_approval', 'introduce', 'ticket_id', 'ticket_price', 'ticket_time', 'ticket_surplus', 'ticket_receive', 'ticket_condition', 'ticket_m_link', 'ticket_link', 'gid'],
            where:where,
            limit:limit,
            offset:offset,
            order:order||[["id","desc"]]
        })
        .then(function(result){
            callback(result.count,result.rows);
        })
        .catch(function(err){
            console.error(err);
        });
};

/**
 * 统计商品条数
 */
GoodsService.prototype.countGoods = function (where, callback) {
    var where = where || {};
    model.nt_goods
        .count({
            where: where
        })
        .then(function (count) {
            callback(count);
        }).catch(function (err) {
            console.error(err);
        });
};

module.exports = new GoodsService();