/**
 * Created by dx on 2016/10/29.
 */
(function ($) {

    //初始化
    $(document).ready(function () {
        $(".J-sidebar").setCageShow();
        $(".J-seckill").seckillLink();
        $(".J-fixed").setFixed();
        $(".J-subcage").setTab();
    })

    //默认设置参数
    var defaults = {
        hideClass:"sidebar-hide",
        goodClass:"hover"
    }

    //点击展现分类
    $.fn.setCageShow = function(options) {
        var options = $.extend(defaults,options);
        this.each(function () {
            var thisTage = $(this);
            thisTage.hover(function () {
                $(this).find(".sidebar-list").removeClass(options.hideClass);

            },function () {
                $(this).find(".sidebar-list").addClass(options.hideClass)
            })
        })
    }

    //产品列表移上去显示按钮的效果
    $.fn.seckillLink = function (options) {
        var options = $.extend(defaults,options);
        return this.each(function() {
            var thisTag = $(this);
            thisTag.delegate(".seckill-item","mouseenter",function(){
                orginBtn = $(".mall",this);
                $(this).addClass(defaults.goodClass);
                var orgin = orginBtn.attr("data-source");
                orginBtn.text("去"+orgin);
            }).delegate(".seckill-item","mouseleave",function () {
                $(this).removeClass(defaults.goodClass);
                orginBtn.text("");
            })
        })
    }

    //产品分类漂浮的效果
    $.fn.setFixed = function(){

        return this.each(function() {
            var thisTag = $(this);
            var thisGot = thisTag.find(".go-top");

            $(".go-top").click(function(){

                $('body,html').animate({
                    scrollTop:0
                },800);

            })

            $(window).scroll(function(){
                var top = $(this).scrollTop();
                var heg = $('.main-nav').outerHeight(true) + $("header").outerHeight(true);
                if(top>heg){
                    thisTag.addClass("start-fixed");
                }else{
                    thisTag.removeClass("start-fixed");
                }
            });


        })
    }

    //帮助中心切换
    $.fn.setTab = function(){
        return this.each(function(){
            var thisTag = $(this);

            thisTag.find("a").each(function(index,elem){
                $(elem).click(function(){
                    var sLevel = $(this).parents(".subside-list").prev().text();
                    var sublev = $(this).text();
                    var smain =  $(this).parents(".subside").next();
                    $(this).addClass("active").parent().siblings().children().removeClass("active");
                    $(this).parents(".subside-mod").siblings().find("a").removeClass("active");
                    smain.find(".sLevel").text(sLevel).end().find(".subLeve").text(sublev);
                    smain.find(".queslist").eq(index).removeClass("none").siblings().addClass("none");
                })
            })
           
        })
    }

})(jQuery)