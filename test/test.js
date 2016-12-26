var istanbul = require('istanbul');//代码覆盖率测试工具
var chai = require('chai');//断言库
//mocha 单元测试框架

var baseApi = require('../lib/baseApi.js');
//获取选品库列表
baseApi.init().getFavoritesUatm({
    'page_no':1,
    'page_size':100
},function(data){
    console.dir(data,{depth:5});
});


/*
var redisdb = require('../lib/redisdb.js');
redisdb.set('asd','111');
redisdb.exists('asd',function(res){
    console.log(res);
});*/