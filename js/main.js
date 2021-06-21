$(function () {
  //windowサイズ
  var windowHeight = $(window).height();
  console.log(windowHeight);

  var windowWidth = $(window).width();
  console.log(windowWidth);

  var headerPos;

  if (windowWidth >= 756) {
    headerPos = 100;
  } else {
    headerPos = 50;
  }
  if ($("section").hasClass("skill")) {
    var skillPosition = $("#skill").offset().top;
    console.log(skillPosition);
  }

  //ハンバーガーメニュー
  $(".header-hum").click(function () {
    $(".humMenu").toggleClass("active");
  });
  $(".humMenu-back,.humMenu-title,.humMenu-list").click(function () {
    $(".humMenu").toggleClass("active");
  });

  //スクロールアニメーション
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if (scroll >= headerPos) {
      $("header").addClass("header-bg_color");
    } else {
      $("header").removeClass("header-bg_color");
    }

    if (scroll >= skillPosition - 200) {
      $(".skill-list_percent_design,.skill-list_percent_code").addClass(
        "skill-design_active"
      );
    } else {
      $(".skill-list_percent_design,.skill-list_percent_code").removeClass(
        "skill-design_active"
      );
    }
    if (scroll >= headerPos) {
      $(".header-title a").css("color", "#000");
    } else {
      $(".header-title a").css("color", "#fff");
    }
  });

  //スムーススクロール
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
