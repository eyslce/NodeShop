
//****************************************************首页、列表页、详情页、侧边菜单栏
//点击左上角按钮，出现左侧边栏菜单
$(document).ready(function(){
	$("#classify").click(function(){
		$("body").css("padding-bottom",0);
		$(".main").css({
			"height": "950px",
			"overflow": "hidden"
		});
		$(".app-other").css({
	    	"left":0,
	    	"visibility":"visible",
	    	"height":"950px"
		    });
		    
		$(".alert-fullbg").css({
			"z-index":501,
			"opacity":0.5,
            "background": "rgb(152, 132, 132)"
		});
	});

    //二维码展示
    $('.J-erwm').click(function () {

        $('.bg-weixin').show();
        $('.member-close-tag').click(function () {
            $('.bg-weixin').removeAttr('style');
        })
    })

    // 分类页效果
    $('.nav-list li').each(function (index,items) {
    	var cagehrf = $(items).find('a').attr('href');
        var cageId = (location.href).split('/');
        var cageFz = (location.href).split('=');
        var cageLm = ("/mobile/" + cageId[4]);
        var width = $(items).outerWidth(true);

        if(cagehrf == cageLm){
            $(items).addClass('curn').siblings().removeClass('curn');
            var slent = -width*(index -4);
            if(index>4){
            	$('.swiper-wrapper').css({'transform':'translate3d('+ slent + 'px, 0px, 0px)'});
			}
		}

    })

	$('.btn-back').click(function () {
		history.back(-1);
    })


//    点击弹出层，作用：收起侧边栏菜单和收起弹出层
	$(".alert-fullbg").click(function(){
		$(".app-other").css({
			"left": "-70%",
			"visibility":"hidden",
			"width": "55%",
			"float": "left",
			"z-index": 999
		});	
	    $(this).css({
	    	"z-index":-1,
	    	"opacity":0,
	    	"background":"rgb(255, 255, 255)"
	    });
    });




// 全部分类  展开

    $("#top-nav li:last-child").click(function(){
        $(".all-goods-classify").slideToggle("fast");
        $(this).siblings().click(function(){
            $(".all-goods-classify").hide("fast");
        });
    });

});




//回到顶部 top，   作用：页面往下滚动超过1000px时  页面右下角会自动出现置顶 按钮

$(document).ready(function(){
		$(window).scroll(function(){
			if($(window).scrollTop() > 1000){
				$(".go-top").show();
			}else{
				$(".go-top").hide();
			}
		});
		$(".go-top").click(function(){
			$('html,body').animate({scrollTop:"0px"},1000);
		});
	});
	

//首页导航栏nav ：点击对应的导航时 颜色高亮
$(document).ready(function(){
	$(".nav li>a").click(function(){
		$(this).addClass("active").parent().siblings().children().removeClass("active");
	});
});


//首页轮播幻灯片  屏幕自适应效果 
$(document).ready(function(){
	var boxHeight=$("#inner li img").height();
	$("#inner").css("height",boxHeight);
	$(window).resize(function () {
		   var boxHeight=$("#inner li img").height();
		   $("#inner").height(boxHeight);
		});
});



//********************************************************************************************