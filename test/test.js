var istanbul = require('istanbul');//代码覆盖率测试工具
var chai = require('chai');//断言库
//mocha 单元测试框架

/*
var baseApi = require('../lib/baseApi.js');
//获取选品库列表
baseApi.init().getFavoritesUatm({
    'page_no':1,
    'page_size':100
},function(data){
    console.dir(data,{depth:5});
});*/


/*
var redisdb = require('../lib/redisdb.js');
redisdb.set('asd','111');
redisdb.exists('asd',function(res){
    console.log(res);
});*/

//测试
var model = require('../models/model.js');
var httpClient = require('../lib/httpClient.js');
httpClient.setUrl('http://api.dataoke.com/index.php?r=Port/index&type=total');
httpClient.get({page:2,appkey:'nrbmhdcz4p',v:2},function(error, response, body){
    var obj = JSON.parse(body);
    var result =  obj.result;
    for(var i in result){
        model.nt_goods.create({
            source:'dataoke',
            p_goods_id:result[i].ID,
            goods_id:result[i].GoodsID,
            title:result[i].Title,
            d_title:result[i].D_title,
            pic:result[i].Pic,
            cid:result[i].Cid,
            org_price:result[i].Org_Price,
            price:result[i].Price,
            is_tmall:result[i].IsTmall,
            sales_num:result[i].Sales_num,
            dsr:result[i].Dsr,
            seller_id:result[i].SellerID,
            commission_plan:result[i].Commission_jihua,
            commission_queqiao:result[i].Commission_queqiao,
            plan_link:result[i].Jihua_link,
            plan_approval:result[i].Jihua_shenhe,
            introduce:result[i].Introduce,
            ticket_id:result[i].Quan_id,
            ticket_price:result[i].Quan_price,
            ticket_time:result[i].Quan_time,
            ticket_surplus:result[i].Quan_surplus,
            ticket_receive:result[i].Quan_receive,
            ticket_condition:result[i].Quan_condition,
            ticket_m_link:result[i].Quan_m_link,
            ticket_link:result[i].Quan_link
        });
        break;
    }

    //console.log(body);
});