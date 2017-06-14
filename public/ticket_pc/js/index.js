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
            var thisLik = $('.subside-cage',this);
            var smain =  thisTag.find('.sidebox');
            thisLik.find("a").each(function(index,elem){

                var thisHref = $(this).attr('href');
                var sublev = $(this).text();
                var sLevel = $(this).parents(".subside-list").prev().text();
                if(thisHref.indexOf(issue_id)>0){
                    smain.find(".sLevel").text(sLevel).end().find(".subLeve").text(sublev);
                    thisLik.find("a").eq(index).addClass('active').parent().siblings().find('a').removeAttr('class');
                    smain.find(".queslist").eq(index).removeClass("none").siblings().addClass("none");
                }



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
            var thisLoc = (location.href).split('/');
            var thisCag = (location.href).split('=');
            var thisLm = ("/" + thisLoc[3]);

            tahiLik.each(function(){
                var thisData = $(this).attr('href');
                if(thisData === thisLm){
                    $(this).addClass('hover').siblings().removeAttr('class');
                    category_id = thisCag[1];

                }
            })

        })
    }
})(jQuery);

//收藏本站与设为首页
function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj,vrl){
    try{
        obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
    }
    catch(e){
        if(window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage',vrl);
        }
    }
}