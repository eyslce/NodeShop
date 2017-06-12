(function($){
    //初始化
    $(document).ready(function(){
         $('.J-banner-list').imgSlider();
         $('.J-subcage').setTab();
         $('.J-nav-menu').setNav();
         $('.J-hottest').setCage();
    });

    //默认设置参数
    var defaults = {
        autoRun:true
    }

    //幻灯片
    $.fn.imgSlider = function(options){
      var options = $.extend(defaults,options);
      return this.each(function(){
          var thisTag = $(this);
          var slidTag = thisTag.find('ul');
          var slidIte = slidTag.children();
          var slidLen = slidIte.length;
          var slidWid = slidIte.outerWidth(true);
          var current = 0;
          var slidBtn = thisTag.find('.banner-contr');
          var timer = function () { };
          slidTag.width(slidLen*slidWid);
          var slidSpa = "";
          for(var i=0;i<slidLen;i++){
              slidSpa += "<span></span>";
          }
          slidBtn.append(slidSpa);
          var run = function(index){
              if(typeof (index) !== 'undefined'){
                   current = index;
              }else{
                   current++;
              }
              if(current<0){
                  current = slidLen - 1;
              }
              if(current>=slidLen){
                  current = 0;
              }
              if(options.autoRun){
                  clearTimeout(timer);
              }
              slidBtn.children().eq(current).addClass('current').siblings().removeAttr('class');
              slidTag.stop(true,false).animate({
                  left:-current*slidWid
              },function(){
                  if(options.autoRun){
                      timer = setTimeout(function(){
                          run();
                      },5000);
                  }
              });
          }
          slidBtn.delegate('span','click',function(){
              var current = $(this).index();
              run(current);
          })

          run(0);

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
                    var smain =  $(this).parents(".middle").find('.sidebox');
                    $(this).addClass("active").parent().siblings().children().removeClass("active");
                    debugger;
                    $(this).parents(".subside-mod").siblings().find("a").removeClass("active");
                    smain.find(".sLevel").text(sLevel).end().find(".subLeve").text(sublev);
                    smain.find(".queslist").eq(index).removeClass("none").siblings().addClass("none");
                })
            })

        })
    }

    //中部导航
    $.fn.setNav = function(){
        return this.each(function(){
            var thisTag = $(this);
            var thisLi = thisTag.find('li');
            var thisLoc = ((location.pathname).split("/"))[1];
            thisLi.each(function(){
                var thisLink = $('a',this);
                var thisData = thisLink.attr('data-nav');

                if(thisData===thisLoc){
                    $(this).find('a').addClass('on').parent().siblings().find('a').removeAttr('class');

                }
            })

        })
    }

    //内页分类
    $.fn.setCage = function(){
        return this.each(function(){
            var thisTag = $(this);
            var tahiLik = $('a',this);
            var thisLoc = (location.href).split('?');
            var thisLm = thisLoc[1];
            tahiLik.each(function(){
                var thisData = $(this).attr('href');
                if(thisData.indexOf(thisLm) > 0){
                    console.log(thisData);
                }
            })

        })
    }

})(jQuery);
