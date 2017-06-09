var index = {
    begin_page: 1,
    current_page: 1,
    total_page: 0,
    page_size:48,
    getGoodsList: function (page_no) {
        if(!category){
            category = 'index';
        }
        $.post('/goods/getlist', {page_no: page_no,category:category}, function (data) {
            index.total_page = data.total_results;
            index.page_size = data.page_size;
            $('ul.goods-list').empty();
            var item = data.results.uatm_tbk_item;
            for (var i in item) {
                var html = '<li>'
                    + '<div class="goods-pic">'
                    + '<a href="' + item[i].click_url + '" target="_blank"><img src="' + item[i].pict_url + '" /></a>'
                    + '<p class="ticket-tab">优惠券50元</p>'
                    + '</div>'
                    + '<h3 class="goods-name"><a href="#">'+item[i].title+'</a></h3>'
                    + '<div class="goods-price left">'
                    + '<div class="new-price"><span class="left sell-prb">￥</span>'
                    + '<label class="left sell-prb">'+item[i].zk_final_price+'</label></div>'
                    + '<div class="old-price">'
                    + '<p>'+ item[i].reserve_price +'</p><i class="icon-fan">包邮</i>'
                    + '</div>'
                    + '</div>'
                    + '<div class="gray-icon">';
                    if (item[i].user_type == 1) {
                        html += '<a  data-source="天猫" href="' + item[i].click_url + '" target="_blank"><i class="m-icon"></i>天猫</a>';
                    } else {
                        html += '<a  data-source="淘宝" href="' + item[i].click_url + '" target="_blank"><i class="t-icon"></i>淘宝</a>';
                    }
                    html += '<span>销量:'+item[i].volume+'</span>'
                         + '</div>'
                         + '<div class="goods-tips">'
                         + '<a><i></i>已缴保证金</a><a><i></i>进群领红包</a>'
                         + '</div>'
                         + '<div class="red-package-tips">'
                         + '<a href="#"><span>返现金红包</span>'
                         + '<span><em>'+Math.ceil(parseFloat(item[i].zk_final_price)*(parseInt(item[i].tk_rate)/100)*0.8)+'</em>元</span></a>'
                         + '</div>'
                         + '</li>';


                $('ul.goods-list').append(html);
            }
            index.paging();
        }, 'json');
    },
    paging: function () {
        var total_page_size = Math.round(index.total_page / index.page_size);
        var page_range = total_page_size - index.begin_page > 5?4:total_page_size - index.begin_page;
        var html = '';
        for(var i=0;i<=page_range;i++){
            var c = 'pages';
            if(index.begin_page+i == index.current_page){
                c = 'on';
            }
            html += '<a class="'+c+'" page_no="'+(index.begin_page+i)+'">'+(index.begin_page+i)+'</a>';
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
    $("div.page-return").delegate("a","click",function(){
        var page_no = $(this).attr('page_no');
        index.current_page = page_no;
        index.getGoodsList(page_no);
    });
    $("div.page-return").delegate("a.prv-page","click",function(){

        if(index.begin_page >5){
            index.begin_page = index.begin_page -5;
            index.current_page = index.begin_page;
        }else{
            index.current_page = index.begin_page = 1;
        }
        index.getGoodsList(index.current_page);
    });
    $("div.page-return").delegate("a.ext-page","click",function(){
        var total_page_size = Math.round(index.total_page / index.page_size);
        if(index.begin_page + 5 <= total_page_size){
            index.current_page = index.begin_page + 5;
            index.begin_page = index.begin_page + 5;
        }else{
            index.current_page = total_page_size;
        }
        index.getGoodsList(index.current_page);
    });
});

