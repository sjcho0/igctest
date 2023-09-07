$(function(){
    // 헤더 fixed
    $(window).on("scroll",function(){
        let st = $(this).scrollTop();
       
        if(st >= 10 ){
        $("#divHeader").addClass("fixed");
        }else{
        $("#divHeader").removeClass("fixed");
        }
    });

    // 검색 열기
    $(".donorSearch .searchOpen").on("click",function(){
        if($("#divWrapper").hasClass("openSearch")){
            $("#divContents .blackBg").fadeOut();
            $(".donorSearch .searchBoxW").slideUp();
            $("#divWrapper").removeClass("openSearch");
        }else{
            // 열린 전체메뉴 닫기
            if($("#divWrapper").hasClass("openWholeMenu")){
            $(".globalMenu").removeClass("up");
            $(".wholeMenu .blackBg").fadeOut();
            $(".wholeMenu").animate({"right":"-100%"},200,function(){
                $("#divWrapper").removeClass("openWholeMenu");
            });
            }
            $("#divContents .blackBg").fadeIn();
            $("#divWrapper").addClass("openSearch");
            $(".donorSearch .searchBoxW").slideDown();
        }
        return false;
    });

    // 전체메뉴 열기
    $(".wholeMenuBtn").on("click",function(){
        if($("#divWrapper").hasClass("openWholeMenu")){
            $(".globalMenu").removeClass("up");
            $(".wholeMenu .blackBg").fadeOut();
            $(".wholeMenu").animate({"right":"-100%"},200,function(){
            $("#divWrapper").removeClass("openWholeMenu");
            });
        }else{

            // 열린 검색창 닫기
            if($("#divWrapper").hasClass("openSearch")){
            $("#divContents .blackBg").fadeOut();
            $(".donorSearch .searchBoxW").slideUp();
            $("#divWrapper").removeClass("openSearch");
            }

            $(".wholeMenu .blackBg").fadeIn();
            $("#divWrapper").addClass("openWholeMenu");
            $(".wholeMenu").animate({"right":0},300,function(){
            $(".globalMenu").addClass("up");
            });
        }
        return false;
    });
    
    // 모바일 전체메뉴 닫기
    $(".wholeMenu .mobileClose").on("click",function(){
    $(".globalMenu").removeClass("up");
        $(".wholeMenu .blackBg").fadeOut();
        $(".wholeMenu").animate({"right":"-100%"},200,function(){
        $("#divWrapper").removeClass("openWholeMenu");
    });
    return false;
    });

    // divTabMenu
    let divTabMenu = new Swiper('#divTabMenu .center',{
        slidesPerView: "auto",
        spaceBetween: 0,
        observeParents: true,
        observer: true,
    });


    // 상단으로 이동
    $(".gotoTop").on("click",function(){
        $('html, body').animate({"scrollTop":0});
        return false;
    });
});