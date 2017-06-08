/**
 * 商品业务逻辑类
 */
var model = require('../models/model.js');
function GoodsService() {

}

/**
 * 获取商品列表
 */
GoodsService.prototype.getGoodsList = function (where,limit,offset,callback) {
    var where = where || {};
    model.nt_goods
        .findAndCountAll({
            where:where,
            limit:limit,
            offset:offset
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