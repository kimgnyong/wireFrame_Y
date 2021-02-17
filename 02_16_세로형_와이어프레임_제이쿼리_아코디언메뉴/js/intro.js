;(function($){
    var intro = {   // const 로 쓰고 :function을 생략하면 ECAM6 버전타입이다.
        init:function(){       // var 쓰고 init:function 으로 쓰면 ECAM5 버전 타입이다.
            var that = this;   // this를 변수에 넣어서 사용하면 init 밖에서도 변수사용이 가능하다.
            that.navFn();
            that.mainSlideFn();
            that.noticeFn();
            that.galleryFn();
            that.bannerFn();
            that.familyFn();
        },
        navFn:function(){
            //아코디언메뉴
            // 메인메뉴 마우스 오버시 해당 메뉴에 클래스를 추가하여 스타일을 설정하고
            var $mainBtn = $('#nav .main-btn');
            var $subBtn = $('#nav .sub')
            var $navUl = $('#nav > ul')

            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass("on");   // this를 써줌으로 인해서 해당위치 하나만 선택된다.

                    $subBtn.removeClass('on');
                    $(this).next().addClass("on");   // $subBtn에 addclass를 하면 sub 전체에 먹지만 next를 써주면 해당 위치의 다음거에만 먹는다.
                }
            });
            $navUl.on({
               mouseleave:function(){
                $mainBtn.removeClass('on');
                $subBtn.removeClass('on');
               } 
            });


        },
        mainSlideFn:function(){
            // 슬라이드 이미지4개 좌우추가 2개 = 총6개    ( 3 0 1 2 3 0 )
            // 선택자 : 애니메이션 대상 .slide-wrap
            // 선택자 : 이전 슬라이드 버튼 .prev-btn
            // 선택자 : 다음 슬라이드 버튼 .next-btn
            // 변수 : 카운트 변수 cnt=0;
            
            var $slideWrap = $('#section1 .slide-wrap')
            var $prevBtn = $('#section1 .prev-btn')
            var $nextBtn = $('#section1 .next-btn')
            var cnt = 0;

            //1 , 메인 슬라이드 함수
            function slideFn(){
                $slideWrap.stop().animate({left:-800*cnt},600,function(){
                    if(cnt>3)cnt=0;
                    $slideWrap.stop().animate({left:-800*cnt},0);
                    if(cnt<0)cnt=3;
                    $slideWrap.stop().animate({left:-800*cnt},0)
                })

            }
            //2 , 다음 슬라이드 카운트 함수
            function nextSlideCountFn(){
                cnt++
                console.log(cnt);
                slideFn();
            }
            function prevSlideCountFn(){
                cnt--
                console.log(cnt);
                slideFn();
            }
            //3 , 다음 슬라이드 버튼 클릭 이벤트
            $nextBtn.on({
                click:function(){
                    // 연속해서 클릭하면 버블링 발생
                    // 디버깅 : 애니메이션이 동작이 안될때 클릭하도록
                    // 제어문 설정
                    //애니메이션이 진행 될때 : if($slideWrap.is(':animated'))   <---- 반드시 과거형 animated를 써준다
                    //                         애니메이트가 진행이 되고있으면 true값이 나옴
                    if(!$slideWrap.is(':animated') ){
                        nextSlideCountFn();
                    }
                }
            })
            $prevBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated') ){
                        prevSlideCountFn();
                    }
                }
            })
            // var $slideWrap = $('#section1 .slide-wrap')
            // var $prevBtn = $('#section1 .prev-btn')
            // var $nextBtn = $('#section1 .next-btn')
            // var cnt = 0;
            
            // $nextBtn.on({
            //     click:function(){
            //         cnt++;
            //         $slideWrap.stop().animate({left:-800*cnt},600,function(){
            //             if(cnt>3)cnt=0;
            //             $slideWrap.stop().animate({left:-800*cnt},0);
            //         })
            //     }
            // })
            // $prevBtn.on({
            //     click:function(){
            //         cnt--;
            //         $slideWrap.stop().animate({left:-800*cnt},600,function(){
            //             if(cnt<0)cnt=3;
            //             $slideWrap.stop().animate({left:-800*cnt},0);
            //         })
            //     }
            // })
            
        },
        noticeFn:function(){

        },
        galleryFn:function(){

        },
        bannerFn:function(){

        },
        familyFn:function(){

        }
    }
    intro.init();
})(jQuery);