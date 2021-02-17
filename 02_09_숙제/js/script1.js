;(function($){
    var script1 = {
        init:function(){
            var that = this;
            that.mainSlideFn();
            that.navFn();
        },
        mainSlideFn:function(){
            var $slideWrap = $('#right-main .slide-wrap');
            var $prevBtn = $('#right-main .prev-btn');
            var $nextBtn = $('#right-main .next-btn');
            var cnt= 0;

            $prevBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated')){
                    cnt--
                    console.log(cnt);
                    $slideWrap.stop().animate({left:-800*cnt},600,function(){
                        if(cnt<0)cnt=3;
                        $slideWrap.stop().animate({left:-800*cnt},0)
                    });
                }
            }
            });
            $nextBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated')){
                    cnt++
                    console.log(cnt);
                    $slideWrap.stop().animate({left:-800*cnt},600,function(){
                        if(cnt>3)cnt=0;
                        $slideWrap.stop().animate({left:-800*cnt},0)
                    });
                }
            }
            });
        },
        navFn:function(){
            var $mainBtn = $('#left-header .main-btn1');
            var $mainUl = $('#left-header .main-btn-content');
            var $subBtn = $('#left-header .sub-btn-wrap')

            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass('on');
                    $subBtn.removeClass('on');
                    $(this).next().addClass('on');
                }
            });
            $mainUl.on({
                mouseleave:function(){
                    $mainBtn.removeClass('on');
                    $subBtn.removeClass('on');
                }
            });
        }
    }
    script1.init();
})(jQuery); 