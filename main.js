const scrollers = document.querySelectorAll(".scroller");

$(document).ready(function () {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  var lastScrollTop = 100;

  $(window).on("scroll", function () {
    var st = $(this).scrollTop();
    if ($("dropdown-content-head").hasClass('show')) return
    if (st > lastScrollTop) {
      $(".header_sp").addClass("show");
      $("header").addClass("show");
    } else {
      // Người dùng scroll lên
      $(".header_sp").removeClass("show");
      $("header").removeClass("show");
    }
    if (st > 100) {
      lastScrollTop = st;
    }
  });

  // list touch

  $(".latest_news .warrper .content_fa .right .item .content h2").on(
    "touchstart",
    function () {
      $(this).addClass("hover_active");
    }
  );
  $(".latest_news .warrper .content_fa .right .item .content h2").on(
    "touchend",
    function () {
      $(this).removeClass("hover_active");
    }
  );

  $(".blog").on("touchstart", function () {
    $(this).addClass("hover_active");
  });
  $(".blog").on("touchend", function () {
    $(this).removeClass("hover_active");
  });

  $(".customer_success_stories .item").on("touchstart", function () {
    $(this).addClass("hover_active");
  });
  $(".customer_success_stories .item").on("touchend", function () {
    $(this).removeClass("hover_active");
  });

  $(".success_project .projects .item").on("touchstart", function () {
    $(this).addClass("hover_active");
  });
  $(".success_project .projects .item").on("touchend", function () {
    $(this).removeClass("hover_active");
  });

  $(".domains .list_item .item").on("touchstart", function () {
    $(this).addClass("hover_active");
  });
  $(".domains .list_item .item").on("touchend", function () {
    $(this).removeClass("hover_active");
  });

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

  setTimeout(() => {
    $("#hero_two").click();
  }, 6000);

  setInterval(() => {
    $("#hero_one").click();

    setTimeout(function () {
      $("#hero_two").click();
    }, 6000);
  }, 12000);

  $("#wrap_dot li").on("click", function () {
    $("#wrap_dot li").removeClass("active");

    $(this).addClass("active");
  });

  $("#hero_two").on("click", function () {
    $(".hero video").css("opacity", 1);
    $(".hero .overlay_video").css("opacity", 1);
    $(".hero .hero_video_text").css("opacity", 1);
    if ($(window).width() > 1000) {
      $(".hero .hero_desription ").css("pointer-events", "none");
      $(".hero .hero_desription").css("opacity", 0);
    }
    $(".hero .scroller_hero").css("opacity", 0);

    $(".hero .hero_desription .wrap_btn").addClass("show");
  });

  $("#hero_one").on("click", function () {
    $(".hero video").css("opacity", 0);
    $(".hero .overlay_video").css("opacity", 0);
    $(".hero .hero_video_text").css("opacity", 0);
    $(".hero .scroller_hero").css("opacity", 1);
    $(".hero").css("pointer-events", "all");
    if ($(window).width() > 1000) {
      $(".hero .hero_desription ").css("pointer-events", "all");
      $(".hero .hero_desription").css("opacity", 1);
    }
    $(".hero .hero_desription .wrap_btn").removeClass("show");
  });

  function addSlick() {
    $(".multiple-items").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1.15,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            centerMode: false,
          },
        },
      ],
    });

    $(".customer-items").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1.18,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
          },
        },
      ],
    });
  }
  addSlick();

  $("#download_profile_btn").on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, "fast", () => {
      onShowPopup("#download_modal");
    });
  });

  $("#consult_first_btn").on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, "fast", () => {
      onShowPopup("#consult_modal");
    });
  });

  $(".multiple-items .item .see_more_btn.first").on("click", () => {
    onShowPopup(".post_modal.first");
    $("#over_lay_post").addClass("show");
    $("#over_lay_post").addClass("show");
  });

  $(".multiple-items .item .see_more_btn.second").on("click", () => {
    onShowPopup(".post_modal.second");
    $("#over_lay_post").addClass("show");
  });

  $(".multiple-items .item .see_more_btn.third").on("click", () => {
    onShowPopup(".post_modal.third");
    $("#over_lay_post").addClass("show");
  });

  $(".multiple-items .item .see_more_btn.four").on("click", () => {
    onShowPopup(".post_modal.four");

    $("#over_lay_post").addClass("show");
  });

  // open the post on sp

  $(".customers_voices .multiple-items .item.first").on("click", () => {
    if ($(window).width() < 1000) {
      onShowPopup(".post_modal.first");
      $("#over_lay_post").addClass("show");
    }
  });

  $(".customers_voices .multiple-items .item.second").on("click", () => {
    if ($(window).width() < 1000) {
      onShowPopup(".post_modal.second");
      $("#over_lay_post").addClass("show");
    }
  });

  $(".customers_voices .multiple-items .item.third").on("click", () => {
    if ($(window).width() < 1000) {
      onShowPopup(".post_modal.third");
      $("#over_lay_post").addClass("show");
    }
  });

  $(".customers_voices .multiple-items .item.four").on("click", () => {
    if ($(window).width() < 1000) {
      onShowPopup(".post_modal.four");
      $("#over_lay_post").addClass("show");
    }
  });

  $("#over_lay").on("click", () => {
    onHidePopup("#download_modal");
    onHidePopup("#consult_modal");
    onHidePopup(".post_modal");
    $("#over_lay_post").removeClass("show");
    $("#over_lay").removeClass("show");
  });

  $("#over_lay_post").on("click", () => {
    onHidePopup("#download_modal");
    onHidePopup("#consult_modal");
    onHidePopup(".post_modal");
    $("#over_lay").removeClass("show");
    $("#over_lay_post").removeClass("show");
  });

  $(".close_modal_btn").on("click", () => {
    onHidePopup("#download_modal");
    onHidePopup("#consult_modal");
    $("#over_lay_post").click();
  });
  $(".head_sp_back").on("click", () => {
    onHidePopup("#download_modal");
    onHidePopup("#consult_modal");
  });

  // header mobile

  $("#burger").on("click", (event) => {
    let $this = $(event.currentTarget);
    if ($this.hasClass("show")) {
      $this.removeClass("show");
      $this.find(".close").hide();
      $this.find(".burger").show();
      $(".dropdown-content-head").removeClass("show");
      $("body").css("overflow-y", "auto");
    } else {
      $this.addClass("show");
      $this.find(".close").show();
      $this.find(".burger").hide();
      $(".dropdown-content-head").addClass("show");
      $("body").css("overflow-y", "hidden");
    }
  });

  $(".accordion").on("click", function (e) {
    const activePanel = $(e.target).closest(".accordion-panel");
    if (!activePanel.length) return;
    toggleAccordion(activePanel);
  });

  $(".dropdown-content-head .accordion .accordion-content li").on(
    "click",
    (e) => {
      e.stopPropagation();
    }
  );

  $(".dropdown-content-head .accordionm .accordion-contentm li").on(
    "click",
    (e) => {
      e.stopPropagation();
    }
  );

  function toggleAccordion(panelToActivate) {
    const activeButton = panelToActivate.find(".accordion-trigger");
    const activePanel = panelToActivate.find(".accordion-content");
    const activePanelIsOpened = activeButton.attr("aria-expanded");

    if (activePanelIsOpened === "true") {
      activeButton.attr("aria-expanded", false);
      activePanel.attr("aria-hidden", true);
    } else {
      activeButton.attr("aria-expanded", true);
      activePanel.attr("aria-hidden", false);
    }
  }

  $(".accordionm").on("click", function (e) {
    const activePanel = $(e.target).closest(".accordion-panelm");
    if (!activePanel.length) return;
    toggleAccordionm(activePanel);
  });

  function toggleAccordionm(panelToActivate) {
    const activeButton = panelToActivate.find(".accordion-triggerm");
    const activePanel = panelToActivate.find(".accordion-contentm");
    const activePanelIsOpened = activeButton.attr("aria-expandedm");

    if (activePanelIsOpened === "true") {
      activeButton.attr("aria-expandedm", false);
      activePanel.attr("aria-hiddenm", true);
    } else {
      activeButton.attr("aria-expandedm", true);
      activePanel.attr("aria-hiddenm", false);
    }
  }

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

  // Khởi tạo Odometer
  const odometer1 = new Odometer({
    el: document.querySelector("#our_customers"),
    value: 10,
  });
  const odometer2 = new Odometer({
    el: document.querySelector("#successfull_projects"),
    value: 10,
  });
  const odometer3 = new Odometer({
    el: document.querySelector("#offices"),
    value: 1,
  });
  const odometer4 = new Odometer({
    el: document.querySelector("#ict_vn"),
    value: 1,
  });
  const odometer5 = new Odometer({
    el: document.querySelector("#customer_sati"),
    value: 10,
  });
  const odometer6 = new Odometer({
    el: document.querySelector("#customer"),
    value: 10,
  });

  window.addEventListener("scroll", function () {
    var element = document.getElementById("myOdometer");
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    if (position.top < windowHeight * 0.8) {
      activateOdometer();
      window.removeEventListener("scroll", arguments.callee);
    }
  });

  // Hàm kích hoạt odometer
  function activateOdometer() {
    odometer1.update(60);
    odometer2.update(100);
    odometer3.update(2);
    odometer4.update(10);
    odometer5.update(95);
    odometer6.update(91);
  }
});
