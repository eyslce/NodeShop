var index = {
    current_page: 1,
    page_num: 1,
    getGoodsList: function (page_no) {
        $.get('/goods/getlist', {page_no: page_no}, function (data) {
            index.page_num = Math.round(data.total_results / data.page_size);
            var item = data.results.uatm_tbk_item;
            for (var i in item) {
                var html = '<li class="goods-item">'
                    + '<a href="javascript:;" class="goods_click" url="' + item[i].click_url + '">'
                    + '<img src="' + item[i].pict_url + '" alt="">'
                    + '<div class="goods-info clearfix">'
                    + '<p class="goods-title">' + item[i].title + '</p>'
                    + '<span class="goods-price"><em>￥' + item[i].zk_final_price + '</em>￥<i>' + item[i].reserve_price + '</i></span>'
                    + '</div>'
                    + '<div class="quality-tag">'
                    + '<span><i>包邮</i></span>'
                    + '<span>近30天已售' + item[i].volume + '</span>'
                    + '</div>'
                    + '</a>'
                    + '</li>';
                /*
                 if (item[i].user_type == 1) {
                 html += '<a class="mall bicon02 free-icon" data-source="天猫" href="' + item[i].click_url + '" target="_blank"></a>';
                 } else {
                 html += '<a class="mall bicon01 free-icon" data-source="淘宝" href="' + item[i].click_url + '" target="_blank"></a>';
                 }*/
                $('ul.good-list').append(html);
            }

        }, 'json');
    },
    is_weixin: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }
};

//
$(document).ready(function () {
    //初始化
    index.getGoodsList(1);
    $('a.call_more').click(function () {
        if (index.current_page < index.page_num) {
            index.getGoodsList(index.current_page + 1);
        } else {
            $(this).parent().html('木有更多了。。。');
        }
    });
    //点击商品
    $("ul.good-list").delegate('a.goods_click','click',function(){
        var url = $(this).attr('url');
        if(index.is_weixin()){
            alert('请在浏览器中打开！');
            //待优化
        }else{
            window.location.href = url;
        }
    })

});


