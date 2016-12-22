var ApiClient = require('./sdk_taobao/index.js').ApiClient;
var config = require('../config.js');
var _ = require('lodash');

function baseApi() {
    var client = null;
    /**
     * 初始化公共参数
     */
    this.init = function () {
        if (null === client) {
            client = new ApiClient({
                'appkey': config.app_key,
                'appsecret': config.app_secret,
                'REST_URL': config.tbk_url
            });
        }
        return this;
    };
    /**
     * 淘宝客商品搜索查询接口
     * 可以根据关键字、类目、价格范围、佣金范围、销量范围等过滤条件查询淘宝客商品
     * 参数：params =  {
     * 'fields':'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick',
     * 'q':'女装',
     * 'cat':'16,18',
     * 'itemloc':'杭州',
     * 'sort':'tk_rate_des',
     * 'is_tmall':'false',
     * 'is_overseas':'false',
     * 'start_price':'10',
     * 'end_price':'10',
     * 'start_tk_rate':'123',
     * 'end_tk_rate':'123',
     * 'platform':'1',
     * 'page_no':'123',
     * 'page_size':'20'
     * }
     */
    this.getItem = function (params,callback) {
        var defaultParam = {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick'
        };
        client.execute('taobao.tbk.item.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })

    };
    /**
     * 淘宝客商品详情（完整）
     * @param params
     * @param callback
     */
    this.getItemDteail = function (params,callback) {
        var defaultParam = {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,description,item_click_url,shop_click_url'
        };
        client.execute('taobao.tbk.item.detail.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })

    };
    /**
     * 淘宝客商品详情（简版）
     * 可以根据商品id查询淘宝客商品。
     * 参数：params = {
     * 'fields':'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url',
     * 'platform':'1',
     * 'num_iids':'123,456'
     * }
     */
    this.getItemInfo = function (params,callback) {
        var defaultParam = {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url'
        };
        client.execute('taobao.tbk.item.info.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    };
    /**
     * 淘宝客商品关联推荐查询
     * 可以根据商品id，卖家id，类目id查询推荐淘宝客商品
     * 参数：params = {
     * 'fields':'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url',
     * 'num_iid':'123',
     * 'count':'20',
     * 'platform':'1'
     * }
     */
    this.getItemRecommend = function (params,callback) {
        var defaultParam = {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url'
        };
        client.execute('taobao.tbk.item.recommend.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    };
    /**
     * 淘宝客店铺查询
     * 可以根据关键字、店铺信用、佣金范围、销量范围等过滤条件查询参加淘宝客的店铺信息
     * 参数：params =  {
     * 'fields':'user_id,shop_title,shop_type,seller_nick,pict_url,shop_url',
     * 'q':'女装',
     * 'sort':'commission_rate_des',
     * 'is_tmall':'false',
     * 'start_credit':'1',
     * 'end_credit':'20',
     * 'start_commission_rate':'2000',
     * 'end_commission_rate':'123',
     * 'start_total_action':'1',
     * 'end_total_action':'100',
     * 'start_auction_count':'123',
     * 'end_auction_count':'200',
     * 'platform':'1',
     * 'page_no':'1',
     * 'page_size':'20'
     * }
     */
    this.getShop = function (params,callback) {
        var defaultParam = {
            'fields': 'user_id,shop_title,shop_type,seller_nick,pict_url,shop_url'
        };
        client.execute('taobao.tbk.shop.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    };
    /**
     * 枚举正在进行中的定向招商的活动列表
     * 枚举指定淘客自己发起的，*正在进行中的*定向招商的活动列表；
     * 每天新开始的定向招商活动，在凌晨2点后生效；
     * 即凌晨2点后可以枚举到当天开始的定向招商活动列表；时间过早不能取到当天开始的定向招商活动；
     * 参数：params = {
     * 'page_no':'1',
     * 'page_size':'20',
     * 'fields':'event_id,event_title,start_time,end_time'
     * }
     */
    this.getEventUatm = function (params,callback) {
        var defaultParam = {
            'fields': 'event_id,event_title,start_time,end_time'
        };
        client.execute('taobao.tbk.uatm.event.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    };
    /**
     * 获取淘宝联盟定向招商的宝贝信息
     * 通过指定定向招商活动id，获取该活动id下的宝贝信息；
     * 宝贝信息中包含了适用于定向招商活动的高佣金淘客点击串;
     * 注意，只能获取已经开始的定向招商id下面的宝贝信息，当天新开始的定向招商活动在凌晨2点生效；
     * 参数：params = {
     * 'platform':'1',
     * 'page_size':'20',
     * 'adzone_id':'34567',
     * 'unid':'3456',
     * 'event_id':'123456',
     * 'page_no':'1',
     * 'fields':'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,
     * item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,type,status'
     * }
     */
    this.getItemEventUatm = function (params,callback) {
        var defaultParam = {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,' +
            'provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,type,status'
        };
        client.execute('taobao.tbk.uatm.event.item.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    };
    /**
     * 获取淘宝联盟选品库的宝贝信息
     * 指定选品库id，获取该选品库的宝贝信息
     * 参数：params ={
     * 'platform':'1',
     * 'page_size':'20',
     * 'adzone_id':'34567',
     * 'unid':'3456',
     * 'favorites_id':'10010',
     * 'page_no':'2',
     * 'fields':'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,status,type'
     * }
     */
    this.getItemFavoritesUatm = function(params,callback){
        var defaultParam = {
            'fields': 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,' +
            'item_url,click_url,nick,seller_id,volume,tk_rate,zk_final_price_wap,event_start_time,event_end_time'
        };
        client.execute('taobao.tbk.uatm.favorites.item.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    };
    /**
     * 获取淘宝联盟选品库列表
     * 枚举出淘宝客在淘宝联盟超级搜索，特色频道中，创建的选品库列表
     * 参数：params = {
     * 'page_no':'1',
     * 'page_size':'20',
     * 'fields':'favorites_title,favorites_id,type',
     * 'type':'1'
     * }
     */
    this.getFavoritesUatm = function(params,callback){
        var defaultParam = {
            'fields': 'favorites_title,favorites_id,type'
        };
        client.execute('taobao.tbk.uatm.favorites.get', _.defaults(params, defaultParam), function (error, response) {
            if (!error) {
                callback(response);
            }
            else {
                console.log(error);
            }
        })
    }
}

module.exports = new baseApi();
