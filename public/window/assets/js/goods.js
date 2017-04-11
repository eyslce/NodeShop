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
            $('ul.seckill-list').empty();
            var item = data.results.uatm_tbk_item;
            for (var i in item) {
                var html = '<li class="col-sm-4 col-md-3">'
                    + '<div class="seckill-item">'
                    + '<a href="/redpacket"><div class="dispacka"><span class="discount-img">'
                    +Math.ceil(parseFloat(item[i].zk_final_price)*(parseInt(item[i].tk_rate)/100)*0.8)+'</span></div></a>'
                    + '<a class="goods-img" href="' + item[i].click_url + '" target="_blank"><img src="' + item[i].pict_url + '"></a>'
                    + '<div class="goods-info">'
                    + '<p class="info-tit"><a class="name">' + item[i].title + '</a></p>'
                    + '<div class="info-price">'
                    + '<span class="new">' + item[i].zk_final_price + '</span>'
                    + '<p class="sales">近30天已售' + item[i].volume + '</p>'
                    + '</div>'
                    + '<div class="info-mark">'
                    + '<p class="old fl"><del>¥' + item[i].reserve_price + '</del></p>'
                    + '<i class="free-icon icon9"></i>';
                if (item[i].user_type == 1) {
                    html += '<a class="mall bicon02 free-icon" data-source="天猫" href="' + item[i].click_url + '" target="_blank"></a>';
                } else {
                    html += '<a class="mall bicon01 free-icon" data-source="淘宝" href="' + item[i].click_url + '" target="_blank"></a>';
                }
                html += '</div>'
                    + '</div>'
                    + '<div class="info-pinzhi hidden-sm hidden-md">'
                    + '<p class="pinzhi1"><a href="/ensure"><i class="free-icon icon1"></i>已缴保证金</a></p>'
                    + '<p class="line">|</p>'
                    + '<p class="pinzhi2"><a href="/ensure"><i class="free-icon icon1"></i>狸淘品质保障</a></p>'
                    + '</div>'
                    + '</div>'
                    + '</li>';
                $('ul.seckill-list').append(html);
            }
            index.paging();
        }, 'json');
    },
    paging: function () {
        var total_page_size = Math.round(index.total_page / index.page_size);
        var page_range = total_page_size - index.begin_page > 5?4:total_page_size - index.begin_page;
        var html =  '<li><a href="#" class="page_begin">&laquo;</a></li>';
        for(var i=0;i<=page_range;i++){
            var c = 'page';
            if(index.begin_page+i == index.current_page){
                c = 'active page';
            }
            html += '<li class="'+c+'" page_no="'+(index.begin_page+i)+'"><a href="#">'+(index.begin_page+i)+'</a></li>';
        }
        html += '<li class="page_end"><a href="#">&raquo;</a></li>';
        $('ul.pagination').html(html);
    }
};

//
$(document).ready(function () {
    //初始化
    index.getGoodsList(1);
    $("ul.pagination").delegate("li.page","click",function(){
        var page_no = $(this).attr('page_no');
        index.current_page = page_no;
        index.getGoodsList(page_no);
    });
    $("ul.pagination").delegate("li.page_begin","click",function(){
        if(index.begin_page >5){
            index.begin_page = index.begin_page -5;
            index.current_page = index.begin_page;
        }else{
            index.current_page = index.begin_page = 1;
        }
        index.getGoodsList(index.current_page);
    });
    $("ul.pagination").delegate("li.page_end","click",function(){
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

