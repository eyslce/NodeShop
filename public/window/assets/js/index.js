/**
 * Created by dx on 2016/10/29.
 */
(function ($) {

    //初始化
    $(document).ready(function () {
        $(".J-sidebar").setCageShow();
    })

    //点击展现分类
    $.fn.setCageShow = function(options) {
        var defaults = {
            hideClass:"sidebar-hide"
        }
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


    
})(jQuery)