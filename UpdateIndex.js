/**
 * Created by wangj16 on 2016/10/27.
 */
(function($) {
    var that = {};

    //��ʼ��
    $(document).ready(function () {
        that.InitShowLeftColumn();
        that.InitHideLeftColumn();
        that.AutoScroll();
        that.NavClickEvent();
        that.SlidePic();
    });

    //������Ͻǰ�ť�������������˵�
    that.InitShowLeftColumn = function(){
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
    };

    // ��������㣬���ã����������˵������𵯳���
    that.InitHideLeftColumn = function(){
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
    };

    //�ص����� top��   ���ã�ҳ�����¹�������1000pxʱ  ҳ�����½ǻ��Զ������ö� ��ť
    that.AutoScroll = function(){
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
    };

    //��ҳ������nav �������Ӧ�ĵ���ʱ ��ɫ����
    that.NavClickEvent = function(){
        $(".nav li>a").click(function(){
            $(this).addClass("active").parent().siblings().children().removeClass("active");
        });
    };

    //��ҳ�ֲ��õ�Ƭ  ��Ļ����ӦЧ��
    that.SlidePic = function(){
        var boxHeight=$("#inner li img").height();
        $("#inner").css("height",boxHeight);
        $(window).resize(function () {
            var boxHeight=$("#inner li img").height();
            $("#inner").height(boxHeight);
        });
    };
})(jQuery)