var GoodsService = require('../service/GoodsService.js');



//http://uland.taobao.com/coupon/edetail?activityId=32位券ID&pid=3段式mm号&itemId=商品ID&src=淘客工具接口参数&dx=
//https://uland.taobao.com/coupon/edetail?activityId=59f977ca51914a2581ecd90b38d&itemId=44134693393&pid=mm_29574340_19906004_68784612&dx=1&src=tkm_tkmwz
GoodsService.getGoodsList({id:1},1,0,function(count,rows){
    for(var i in rows){
        var obj = rows[i].dataValues;
        var url = 'http://uland.taobao.com/coupon/edetail?activityId='+obj.ticket_id+'&pid=mm_29574340_19906004_68784612&itemId='+obj.goods_id;
        console.log(obj);
    }
})