var index = {
    begin_page: 1,
    current_page: 1,
    total_page: 0,
    page_size: 48,
    getGoodsList: function (page_no) {
        if(typeof(category_id) == 'undefined'){
            category_id = 0;
        }
        if(typeof(orderBy) == 'undefined'){
            orderBy = null;
        }
        if(typeof(direction) == 'undefined'){
            direction = null;
        }
        $.post('/goods/getTicketList', {page_no: page_no, category_id: category_id,orderBy:orderBy,direction:direction}, function (result) {
            index.total_page = result.total_page;
            index.page_size = result.page_size;
            $('ul.goods-list').empty();
            var item = result.data;
            for (var i in item) {
                var html = '<li>'
                    + '<div class="goods-pic">'
                    + '<a href="' + item[i].click_url + '" target="_blank"><img src="' + item[i].pic + '" />'
                    + '<p class="ticket-tab">优惠券' + item[i].ticket_price + '元</p></a>'
                    + '</div>'
                    + '<h3 class="goods-name"><a href="' + item[i].click_url + '" target="_blank">' + item[i].title + '</a></h3>'
                    + '<div class="goods-price left">'
                    + '<div class="new-price">'
                    + '<span class="left sell-prb">￥</span>'
                    + '<label class="left sell-prb">' + item[i].price + '</label></div>'
                    + '<div class="old-price">'
                    + '<p>' + item[i].org_price + '</p><i class="icon-fan">包邮</i>'
                    + '</div>'
                    + '</div>'
                    + '<div class="gray-icon">';
                if (item[i].is_tmall == 1) {
                    html += '<a  data-source="天猫" href="' + item[i].click_url + '" target="_blank"><i class="m-icon"></i>天猫</a>';
                } else {
                    html += '<a  data-source="淘宝" href="' + item[i].click_url + '" target="_blank"><i class="t-icon"></i>淘宝</a>';
                }
                //1、计划大于鹊桥
                // 佣金=卷后价*计划比例
                //2、鹊桥大于计划
                //佣金=卷后价*鹊桥比例
                //然后 红包=佣金*70%（取整，不足一块，取1）
                if(item[i].commission_plan > item[i].commission_queqiao){
                    var final_price = item[i].price * item[i].commission_plan/100;
                }else{
                    var final_price = item[i].price * item[i].commission_queqiao/100;
                }
                var price = Math.floor(final_price * 0.7);
                html += '<span>销量:' + item[i].sales_num + '</span>'
                    + '</div>'
                    + '<div class="goods-tips">'
                    + '<a><i class="iconfont">&#xe66a;</i>已缴保证金</a><a><i class="iconfont">&#xe78d;</i>进群领红包</a>'
                    + '</div>'
                    + '<div class="red-package-tips">'
                    + '<a href="#"><span>返现金红包</span>'
                    + '<span><em>' + (price<1?1:price)+ '</em>元</span></a>'
                    + '</div>'
                    + '</li>';


                $('ul.goods-list').append(html);
            }
            index.paging();
        }, 'json');
    },
    paging: function () {
        var total_page_size = Math.round(index.total_page / index.page_size);
        var page_range = total_page_size - index.begin_page > 5 ? 4 : total_page_size - index.begin_page;
        var html = '';
        for (var i = 0; i <= page_range; i++) {
            var c = 'pages';
            if (index.begin_page + i == index.current_page) {
                  c = 'on';
            }
            html += '<a class="' + c + '" page_no="' + (index.begin_page + i) + '">' + (index.begin_page + i) + '</a>';
        }
        html += '<a class="prv-page">上一页</a>';
        html += '<a class="next-page">下一页</a>';
        $('div.page-return').html(html);
    }
};

//
$(document).ready(function () {
    //初始化
    index.getGoodsList(1);
    $("div.page-return").delegate("a", "click", function () {
        var page_no = $(this).attr('page_no');
        index.current_page = page_no;
        index.getGoodsList(page_no);
    });
    $("div.page-return").delegate("a.prv-page", "click", function () {

        if (index.begin_page > 5) {
            index.begin_page = index.begin_page - 5;
            index.current_page = index.begin_page;
        } else {
            index.current_page = index.begin_page = 1;
        }
        index.getGoodsList(index.current_page);
    });
    $("div.page-return").delegate("a.ext-page", "click", function () {
        var total_page_size = Math.round(index.total_page / index.page_size);
        if (index.begin_page + 5 <= total_page_size) {
            index.current_page = index.begin_page + 5;
            index.begin_page = index.begin_page + 5;
        } else {
            index.current_page = total_page_size;
        }
        index.getGoodsList(index.current_page);
    });
});

