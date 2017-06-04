/**
 * Created by Administrator on 2017/6/4.
 */
var client = require('../lib/defApi/daTaoKeClient.js');

client.getGoods({page:1}, function (error, response, body) {
    console.info(error)
    if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body)
        console.log(obj) //
    }
})