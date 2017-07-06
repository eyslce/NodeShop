var index = {
    current_page: 1,
    page_num: 1,
    queryStr:'',
    getGoodsList: function (page_no) {
        $.post('/mobile/getList?'+index.queryStr, {page_no: page_no}, function (result) {
            index.page_num = result.total_page;
            index.queryStr = result.queryStr;
            var item = result.data;
            for (var i in item) {
                var html = '<div class="list-item">'
                    + '<a href="' + item[i].click_url + '" >'
                    + '<div class="list-item-left">'
                    + '<img class="list-item-img" src="' + item[i].pic + '">'
                    + '<div class="list-item-info">'
                    + '<p class="list-item-name">';
                if (item[i].is_tmall == 1) {
                    html += '<span class="iconfont tmall-icon">&#xe744;</span>';
                } else {
                    html += '<span class="iconfont tmall-icon">&#xe767;</span>';
                }
                html += item[i].title + '</p>'
                    + '<p class="sell-price"><span class="item-discount-price">券后<i>' + item[i].price + '</i></span>'
                    + '<span class="item-market-price">￥' + item[i].org_price + '</span>'
                    + '</p>'
                    + '<p class="sell-num"><span class="mail-icon">包邮</span>'
                    + '<span class="item-sell-num">销量' + item[i].sales_num + '</span>'
                    + '</p>'
                    + '</div>'
                    + '</div>'
                    + '<div class="list-item-right">'
                    + '<p class="right-price">'
                    + '<span class="right-price-icon">￥</span>' + '<span class="right-price-num">' + item[i].ticket_price + '</span>'
                    + '<span class="quan-text">优惠券</span>'
                    + '</p>'
                    + '<p class="quan-btn">'
                    + '<span class="quan-text-icon">领券购买</span>'
                    + '</p>'
                    + '</div>'
                if (item[i].commission_plan > item[i].commission_queqiao) {
                    var final_price = item[i].price * item[i].commission_plan / 100;
                } else {
                    var final_price = item[i].price * item[i].commission_queqiao / 100;
                }
                var price = Math.floor(final_price * 0.7);
                price = price < 1 ? 1 : price;
                +'<p class="redpackage">此商品狸淘返现金红包<span>' + price + '</span>元</p>'
                + '</a>'
                + '</div>';
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
    index.queryStr = typeof(queryStr)=='undefined'?'':queryStr;
    index.getGoodsList(1);
    $('a.call_more').click(function () {
        if (index.current_page < index.page_num) {
            index.getGoodsList(index.current_page + 1);
        } else {
            $(this).parent().html('木有更多了。。。');
        }
    });
    //点击商品
    $("ul.good-list").delegate('a.goods_click', 'click', function () {
        var url = $(this).attr('url');
        if (index.is_weixin()) {
            $(".ayer").removeClass("none");
            //待优化
        } else {
            window.location.href = url;
        }
    })

});


