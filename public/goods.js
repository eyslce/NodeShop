$.get('/goods/getlist',{page_no:1},function(data){
    var item = data.results.uatm_tbk_item;
    for(var i in item){
        var html = '<li class="col-sm-4 col-md-3">'
            +'<div class="seckill-item">'
            +'<a class="goods-img" href="'+item[i].click_url+'" target="_blank"><img src="'+item[i].pict_url+'"></a>'
            +'<div class="goods-info">'
            +'<p class="info-tit"><a class="name">'+item[i].title+'</a></p>'
            +'<div class="info-price">'
            +'<span class="new">'+item[i].zk_final_price+'</span>'
            +'<p class="sales">近30天已售'+item[i].volume+'</p>'
            +'</div>'
            +'<div class="info-mark">'
            +'<p class="old fl"><del>¥'+item[i].reserve_price+'</del></p>'
            +'<i class="free-icon icon9"></i>';
        if(item[i].user_type == 1){
            html += '<a class="mall bicon02 free-icon" data-source="天猫" href="'+item[i].click_url+'" target="_blank"></a>';
        }else{
            html += '<a class="mall bicon01 free-icon" data-source="淘宝" href="'+item[i].click_url+'" target="_blank"></a>';
        }
        html += '</div>'
            +'</div>'
            +'<div class="info-pinzhi hidden-sm">'
            +'<p class="pinzhi1"><a href="/ensure"><i class="free-icon icon1"></i>已缴保证金</a></p>'
            +'<p class="line">|</p>'
            +'<p class="pinzhi2"><a href="/ensure"><i class="free-icon icon1"></i>狸淘品质保障</a></p>'
            +'</div>'
            +'</div>'
            +'</li>';
        $('ul.seckill-list').append(html);
    }

},'json');
