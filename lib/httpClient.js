var request = require('request');

/**
 * http客户端类
 */
function httpClient(){
    var options = {
        url:'',
        method:'POST',
        headers:{},
        qs:{}
    };
    this.setUrl = function(url){
        options.url = url;
        return this;
    };
    this.setHeader = function(headers){
        options.headers = headers || {};
        return this;
    };
    this.post = function(params,callback){
        options.qs = params || {};
        request(options,callback);
    };
    this.get = function(params,callback){
        options.method = 'GET';
        options.qs = params || {};
        request(options,callback);
    }

}
module.exports = httpClient;