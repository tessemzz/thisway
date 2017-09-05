$(document).ready(function () {
  $("a[href='#bottom']").click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });
  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 20) {
      var arrow = document.getElementById("hulk");
      arrow.style.visibility = "hidden";
    }
    if ($(window).scrollTop() < 5) {
      var arrow = document.getElementById("hulk");
      arrow.style.visibility = "visible";
    }
  });

});

