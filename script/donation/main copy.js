//3자리마다 , 찍기
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$(function(){
    var winWidth = window.innerWidth || document.documentElement.clientWidth;
    // 숫자 카운트
    $('.content1 .count').each(function() { // .count에 각각 적용
        var $this = $(this),
            countTo = $this.attr('data-count');
            // $this = .count (0)
            // countTo = .count의 data-count 속성의 값
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo 
          // 0에서 countNum이 된다
        },
        {
          duration: 3000, // 애니메이션이 완료될때까지 걸리는 시간
          easing:'linear', // 애니메이션 효과 방식
          step: function() { // 움직임 각 스텝별로 실행될 함수
            $this.text(numberWithCommas(Math.floor(this.countNum)));
            // Math.floor -> this.countNum의 값을 정수로 만들어준다
          },
          complete: function() { // 움직임이 멈춘 후 실행될 함수
            $this.text(numberWithCommas(this.countNum));
            // this.countNum이 $this의 text값이 된다
          }
        });  
      });

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

      // 사이버문고 swiper
      // let cyberLibrarySwiper = undefined
      // let itemNum = $(".cyberLibrary .item").length;
      // function initLibrarySwiper(loopChk){
      //   cyberLibrarySwiper = new Swiper('.cyberLibrary',{
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //     loop: loopChk,
      //     centerInsufficientSlides: true,
      //     observeParents: true,
      //     observer: true,
      //     navigation: {
      //       nextEl: ".libraryW .nextBtn",
      //       prevEl: ".libraryW .prevBtn",
      //     },
      //     breakpoints: {
      //       1638: {
      //         slidesPerView: 5,
      //         spaceBetween: 44
      //       },
      //       1374: {
      //         slidesPerView: 5,
      //         spaceBetween: 30
      //       },
      //       1240: {
      //         slidesPerView: 4,
      //         spaceBetween: 20
      //       },
      //       1024: {
      //         slidesPerView: 4,
      //         spaceBetween: 15
      //       },
      //       670: {
      //         slidesPerView: 3,
      //         spaceBetween: 10
      //       },
      //       500: {
      //         slidesPerView: 2,
      //         spaceBetween: 10
      //       }
      //     }
      //   });
  
      // }
      // $(window).on("resize load",function(){
      //     winWidth = window.innerWidth || document.documentElement.clientWidth;
      //     if(cyberLibrarySwiper == undefined){
      //       if(winWidth >= 1374 && itemNum > 5){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 1373 && winWidth >= 1024 && itemNum > 4){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 1023 && winWidth >= 670 && itemNum > 3){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 669 && winWidth >= 500 && itemNum > 2){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 499 && itemNum > 1){
      //         initLibrarySwiper(true);
      //       }else{
      //         initLibrarySwiper(false);
      //       }
      //     }else{
      //       cyberLibrarySwiper.destroy();
      //       cyberLibrarySwiper = undefined;

      //       if(winWidth >= 1374 && itemNum > 5){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 1373 && winWidth >= 1024 && itemNum > 4){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 1023 && winWidth >= 670 && itemNum > 3){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 669 && winWidth >= 500 && itemNum > 2){
      //         initLibrarySwiper(true);
      //       }else if(winWidth < 499 && itemNum > 1){
      //         initLibrarySwiper(true);
      //       }else{
      //         initLibrarySwiper(false);
      //       }
      //     }
      // });
      let cyberLibrarySwiper = new Swiper('.cyberLibrary',{
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        centerInsufficientSlides: true,
        watchOverflow: true,
        observeParents: true,
        observer: true,
        navigation: {
          nextEl: ".libraryW .nextBtn",
          prevEl: ".libraryW .prevBtn",
        },
        breakpoints: {
          1638: {
            slidesPerView: 5,
            spaceBetween: 44
          },
          1374: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          670: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      });
      // 상단으로 이동
      $(".gotoTop").on("click",function(){
          $('html, body').animate({"scrollTop":0});
          return false;
      });
});