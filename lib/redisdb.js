var config = require('../config.js');
var redis = require('redis');

function redisdb(){
    //创建客户端
    var client = redis.createClient(config.redis);
    //监听error事件
    client.on('error', function (err) {
        console.log(err);
    });
    //判断key是否存在
    this.exists = function(key,callback){
      client.exists(key,function(err,result){
          if(err){
              console.log(err);
              return;
          }
          callback(result);
        });
    };
    //给数据库中名称为 key 的 string 赋予值 value
    this.set = function(key,value){
        client.set(key,value);
    };
    //返回数据库中名称为 key 的 string 的 value
    this.get = function(key,callback){
        client.get(key,function(err,result){
            if(err){
                console.log(err);
                return;
            }
            callback(result);
        });
    };
    //向名称为 key 的 hash 中添加元素 field=value
    this.hset = function(key, field, value){
        client.hset(key, field, value);
    };
    //返回名称为 key 的 hash 中 field 对应的 value
    this.hget = function(key,field,callback){
        client.hget(key,field,function(err,result){
            if(err){
                console.log(err);
                return;
            }
            callback(result);
        });
    };
    //向名称为 key 的 hash 中添加元素 field{$i}=value{$i}
    this.hmset = function(key,values,callback){
      client.hmset(key,values,function(err,result){
          if(err){
              console.log(err);
              return;
          }
          callback(result);
      });
    };
    //返回名称为 key 的 hash 中所有的键（field）及其对应的 value
    this.hgetAll = function(key,callback){
        client.hgetAll(key,function(err,result){
            if(err){
                console.log(err);
                return;
            }
            callback(result);
        });
    }

}
module.exports = new redisdb();
