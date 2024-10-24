$(function () {
  // 서브메뉴
  $(".sub-menu").each(function (index) {
    $(this).mouseenter(function () {
      $("nav>ul>li>a").removeClass("active");
      $("nav>ul>li>a").eq(index).addClass("active");
    });
    $(this).mouseleave(function () {
      $("nav>ul>li>a").removeClass("active");
    });
  });
  $("nav").mouseenter(function () {
    $(".sub-back").stop().slideDown();
    $(".sub-menu").stop().slideDown();
  });
  $("nav").mouseleave(function () {
    $(".sub-back").stop().slideUp();
    $(".sub-menu").stop().slideUp();
  });
});
