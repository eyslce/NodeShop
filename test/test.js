var istanbul = require('istanbul');//代码覆盖率测试工具
var chai = require('chai');//断言库
//mocha 单元测试框架

/*
var baseApi = require('../lib/baseApi.js');
baseApi.init().getItem( {
    'q':'女装',
    'cat':'16,18',
    'itemloc':'杭州',
    'sort':'tk_rate_des',
    'is_tmall':'false',
    'is_overseas':'false',
    'start_price':'10',
    'end_price':'10',
    'start_tk_rate':'123',
    'end_tk_rate':'123',
    'platform':'1',
    'page_no':'123',
    'page_size':'20'
});
*/

var redisdb = require('../lib/redisdb.js');
redisdb.set('asd','111');
redisdb.exists('asd',function(res){
    console.log(res);
});