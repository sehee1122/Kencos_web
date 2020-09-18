(function ($) {})(jQuery);

(function ($) {
  var device_status = "";
  $(window).resize(function () {
    var dw = $(document).width();
    if (dw < 769 && device_status == "pc") {
      //PC에서 모바일로 변경시
      $("body").removeClass("pc");
      $("body").addClass("mobile");
      init_mobile();
      device_status = "mobile";
    } else if (dw >= 768 && device_status == "mobile") {
      //모바일에서 PC로 변경시
      $("body").removeClass("mobile");
      $("body").addClass("pc");
      init_pc();
      device_status = "pc";
    }
  });
  /* 메뉴고정 */
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 0) {
      $("body.pc").addClass("desk_scrolling");
      $("body.pc.site-is-kencos .site-title img").attr(
        "src",
        "http://keenus.net/renewal/include/images/logo-white.png"
      );
    } else {
      $("body.pc").removeClass("desk_scrolling");
      $("body.pc.site-is-kencos .site-title img").attr(
        "src",
        "http://keenus.net/renewal/include/images/logo.png"
      );
    }
  });
  /*Step visual*/
  window.onload = function () {
    jQuery("#stepVisual").addClass("open");
  };
  $(".step-visual-con").on("init", function (event, slick) {
    $(".step-visual-item").eq(0).addClass("active-item");
  });
  $(".step-visual-con").on("afterChange", function (
    event,
    slick,
    currentSlide
  ) {
    $(".step-visual-item").removeClass("active-item");
    $(this).find(".step-visual-item").eq(currentSlide).addClass("active-item");
  });
  /*PC-MOBILE*/
  $(document).ready(function () {
    var dw = $(document).width();
    if (dw < 768) {
      //모바일
      $("body").removeClass("pc");
      $("body").addClass("mobile");
      /*change html markup*/
      $(".scroll-fader").insertAfter(".site-header");
      init_mobile();
      device_status = "mobile";
    } else {
      //PC
      $("body").removeClass("mobile");
      $("body").addClass("pc");
      init_pc();
      device_status = "pc";
    }
    /******** Common ********/
    /*wp editor blank pp remover*/
    $("p").each(function () {
      var $this = $(this);
      if ($this.html().replace(/\s|&nbsp;/g, "").length == 0) $this.remove();
    });
    /**/
    // window 가로 값따라 메인 비주얼 이미지 변경
    var w_width = window.innerWidth;
    $(".kwicks").each(function () {
      if (w_width <= 800) {
        $(this).kwicks("destroy");
      } else {
        $(this).kwicks({
          maxSize: "46%",
          spacing: 0,
          behavior: "menu",
          selectOnClick: false,
        });
      }
    });
    $(window).resize(function () {
      var w_width = $(window).width();
      $(".kwicks").each(function () {
        if (w_width <= 800) {
          $(this).kwicks("destroy");
        } else {
          $(this).kwicks({
            maxSize: "46%",
            spacing: 0,
            behavior: "menu",
          });
        }
      });
    });
    /*슬라이더 fullhegiht*/
    /*FULL SCREEN*/
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      headerHeight = $("#masthead").height(),
      adjHeight =
        windowHeight -
        $("#masthead").height(); /* - $('#float-contact').height()*/
    $("#mainVisual.full-height").css({
      width: windowWidth + "px",
      height: adjHeight + "px",
      "margin-top": headerHeight - 1 + "px",
    });

    $(window).resize(function () {
      var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        headerHeight = $("#masthead").height(),
        adjHeight = windowHeight - $("#masthead").height();
      $("#mainVisual.full-height").css({
        width: windowWidth + "px",
        height: adjHeight + "px",
        "margin-top": headerHeight - 1 + "px",
      });
    });
    $("#mainVisual").each(function () {
      // 메인 비주얼 zoom-out 효과
      $(".main-visual-con").on("init", function (event, slick) {
        $(".main-visual-item").eq(0).addClass("active-item");
      });
      $(".main-visual-con").on("afterChange", function (
        event,
        slick,
        currentSlide
      ) {
        $(".main-visual-item").removeClass("active-item");
        $(this)
          .find(".main-visual-item")
          .eq(currentSlide)
          .addClass("active-item");
      });
      // 메인 비주얼 슬라이드
      $(".main-visual-con").slick({
        //slidesToShow: 1,
        //slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: false,
        autoplay: true,
        speed: 800,
        infinite: true,
        autoplaySpeed: 5000,
        easing: "easeInOutQuint",
        pauseOnHover: false,
        //asNavFor:'.main-visual-nav-list',
        responsive: [
          {
            breakpoint: 961,
            settings: {
              arrows: false,
            },
          },
        ],
      });
    });
    /*우측토글메뉴클래스*/
    $("#ui__contact").removeClass("clicked");
    $("#btn__close,.directcallcalls").click(function () {
      $("#ui__contact").toggleClass("clicked");
    });
    /*전화번호*/
    $(".site-kencos .call-banner i").after("1522-6856");
    $(".site-kencos .directcallcall").attr("href", "tel:1522-6856");
    $(".site-kencos footer .call-banner").attr("href", "tel:1522-6856");
    $(".site-kencos #gnb-new .tel").attr("href", "tel:1522-6856");
    $(".site-kencos #gnb-new .sms").attr("href", "sms:010-9468-7880");

    /**/
    $(".mobile_table_50 td").wrapInner(
      '<span class="full-tb"><span class="tc"></span></span>'
    );
    $(".pc.site-id-51 .call-banner").after(
      '<div class="btn-vip"><a href="#무료자료신청">VIP고객등록</a></div>'
    );

    /**/
    var winW = $(window).width();
    var winH = $(window).height();

    //GNB transform
    var scrollPos = $(window).scrollTop();
    $(window).scroll(function () {
      scrollPos = $(window).scrollTop();
      if (scrollPos > winH - 100) {
        moveicon();
        moveicon2();
      }
    });
    function moveicon() {
      $("#circle1")
        .animate({ left: "10%" }, 10000)
        .animate({ left: "-200" }, 10000, function () {
          moveicon();
        });
    }
    function moveicon2() {
      $("#circle2")
        .animate({ right: "25%" }, 10000)
        .animate({ right: "0" }, 10000, function () {
          moveicon2();
        });
    }
    /*TO THE TOP*/
    if ($("#back-to-top").length) {
      var scrollTrigger = 100, // px
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $("#back-to-top").addClass("show");
          } else {
            $("#back-to-top").removeClass("show");
          }
        };
      backToTop();
      $(window).on("scroll", function () {
        backToTop();
      });
      $("#back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          700
        );
      });
    }
  }); // End of Ready
  //PC버젼 초기화
  function init_pc() {}
  //모바일 버젼 초기화
  function init_mobile() {}
})(jQuery);
