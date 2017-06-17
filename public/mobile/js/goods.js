var index = {
    current_page: 1,
    page_num: 1,
    getGoodsList: function (page_no) {
        $.post('/goods/getlist', {page_no: page_no,category:'index'}, function (data) {
            index.page_num = Math.round(data.total_results / data.page_size);
            var item = data.results.uatm_tbk_item;
            for (var i in item) {
                var html = '<div class="list-item">'
                        + '<a href="#" url="' + item[i].click_url + '">'
                        + '<div class="list-item-left">'

                        + '<img class="list-item-img" src="' + item[i].pict_url + '">'
                        + '<div class="list-item-info">'
                        + '<p class="list-item-name">';

                        if (item[i].user_type == 1) {
                            html += '<span class="iconfont tmall-icon">&#xe744;</span>';
                        } else {
                            html += '<span class="iconfont tmall-icon">&#xe767;</span>';
                        }

                    html += item[i].title +'</p>'
                        + '<p class="sell-price"><span class="item-discount-price">券后<i>'+item[i].zk_final_price+'</i></span>'
                        + '<span class="item-market-price">￥'+item[i].reserve_price+'</span>'
                        + '</p>'
                        + '<p class="sell-num"><span class="mail-icon">包邮</span>'
                        + '<span class="item-sell-num">销量'+item[i].volume+'</span>'
                        + '</p>'
                        + '</div>'

                        + '</div>'
                        + '<div class="list-item-right">'
                        + '<p class="right-price">'
                        + '<span class="right-price-icon">￥</span>'+'<span class="right-price-num">60</span>'
                        + '<span class="quan-text">优惠券</span>'
                        + '</p>'
                        + '<p class="quan-btn">'
                        + '<span class="quan-text-icon">领券购买</span>'
                        + '</p>'
                        + '</div>'
                        + '<p class="redpackage">此商品狸淘返现金红包<span>10</span>元</p>'
                        + '</a>'
                        + '</div>'







                /*var html = '<div class="list-item">'
                    + '<a href="javascript:;" class="goods_click" url="' + item[i].click_url + '">'
                    + '<img src="' + item[i].pict_url + '" alt="">'
                    + '<div class="goods-info clearfix">'
                    + '<p class="goods-title"><em class="site-tag tmall"></em>' + item[i].title + '</p>'
                    + '<span class="goods-price"><em>￥' + item[i].zk_final_price + '</em>￥<i>' + item[i].reserve_price + '</i></span>'
                    + '</div>'
                    + '<div class="quality-tag">'
                    + '<span><i>包邮</i></span>'
                    + '<span>已售 ' + item[i].volume + '</span>'
                    + '</div>'
                    + '</a>'
                    + '</div>';

                 if (item[i].user_type == 1) {
                 html += '<a class="mall bicon02 free-icon" data-source="天猫" href="' + item[i].click_url + '" target="_blank"></a>';
                 } else {
                 html += '<a class="mall bicon01 free-icon" data-source="淘宝" href="' + item[i].click_url + '" target="_blank"></a>';
                 }*/
                $('div.recommend').append(html);
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
            $(".ayer").removeClass("none");
            //待优化
        }else{
            window.location.href = url;
        }
    })

});


