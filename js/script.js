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
  //   슬라이드
  var count = 0;
  setInterval(function () {
    if (count === 3) {
      count = 0;
    }
    $(".sliders")
      .stop()
      .animate({
        left: -1200 * count,
      });
    count++;
  }, 3000);

  //   모달
  $(".notic-list li:first-child").click(function () {
    $(".modal").show();
  });
  $(".modal-close").click(function () {
    $(".modal").hide();
  });

  // 패밀리사이트
  $("#family").change(function () {
    var url;
    url = $(this).val();
    console.log(url);
    window.open(url, "_blank");
    // window.open(url, "_self");
  });
});
