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
      $(".hero .hero_desription").css("pointer-events", "none");
    });

    $("#hero_one").on("click", function () {
      $(".hero video").css("opacity", 0);
      $(".hero .overlay_video").css("opacity", 0);
      $(".hero .hero_video_text").css("opacity", 0);
      $(".hero .hero_desription").css("pointer-events", "all");

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

  $("#download_profile_btn").on("click", () => {
    onShowPopup("#download_modal");
  });

  $("#consult_first_btn").on("click", () => {
    onShowPopup("#consult_modal");
  });

  $(".multiple-items .item .see_more_btn").on("click", () => {
    onShowPopup("#post_modal");
  });

  $("#over_lay").on("click", () => {
    onHidePopup("#download_modal");
    onHidePopup("#consult_modal");
    onHidePopup("#post_modal");
  });

  $(".close_modal_btn").on("click", () => {
    onHidePopup("#download_modal");
  });

  function onShowPopup(modalName) {
    $("body").addClass("modal_Open");
    $("#over_lay").addClass("show");
    $(modalName).addClass("show");
  }
  function onHidePopup(modalName) {
    $("body").removeClass("modal_Open");
    $("#over_lay").removeClass("show");
    $(modalName).removeClass("show");
  }
});
