var request = require('request');

function daTaoKeClient(){
       var option ={
           url:"http://api.dataoke.com/index.php",
           method:'get',
           headers:{},
           qs:{type:'total', v:2, r:'Port/index', appkey:'nrbmhdcz4p'}
       };

        this.getGoods = function(param ,callback){
            option.qs =  option.qs || param;
            request(option,callback);
        }
}

module.exports = new daTaoKeClient();


