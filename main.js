const scrollers = document.querySelectorAll(".scroller");

$(document).ready(function () {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    $(".scroller").each(function () {
      $(this).attr("data-animated", true);

      var scrollerInner = $(this).find(".scroller__inner");
      var scrollerContent = scrollerInner.children().toArray();

      $.each(scrollerContent, function () {
        var duplicatedItem = $(this).clone(true);
        duplicatedItem.attr("aria-hidden", true);
        scrollerInner.append(duplicatedItem);
      });
    });
  }

  var scrollersH = $(".scroller_hero");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimationH();
  }

  function addAnimationH() {
    scrollersH.each(function () {
      $(this).attr("data-animated", true);

      var scrollerInner = $(this).find(".scroller_hero__inner");
      var scrollerContent = scrollerInner.children().toArray();

      $.each(scrollerContent, function () {
        var duplicatedItem = $(this).clone(true);
        duplicatedItem.attr("aria-hidden", true);
        scrollerInner.append(duplicatedItem);
      });
    });
  }

  $(document).ready(function () {
    setTimeout(() => {
      $("#hero_two").click()
    }, 3000);
    $("#wrap_dot li").on("click", function () {
      $("#wrap_dot li").removeClass("active");

      $(this).addClass("active");
    });

    $("#hero_two").on("click", function () {
      $(".hero video").css("opacity", 1);
      $(".hero .overlay_video").css("opacity", 1);
      $(".hero .hero_video_text").css("opacity", 1);
    });

    $("#hero_one").on("click", function () {
      $(".hero video").css("opacity", 0);
      $(".hero .overlay_video").css("opacity", 0);
      $(".hero .hero_video_text").css("opacity", 0);
    });
  });

  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  $(".customer-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  });
});
