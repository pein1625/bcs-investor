// navbar mobile toggle
$(function () {
  var $body = $('html, body');
  var $navbar = $('.js-navbar');
  var $navbarOpen = $('.js-navbar-open');
  var $navbarClose = $('.js-navbar-close');

  $navbarOpen.on('click', function () {
    $navbar.addClass('is-show');
    $body.addClass('overflow-hidden');
  });

  $navbarClose.on('click', function () {
    $navbar.removeClass('is-show');
    $body.removeClass('overflow-hidden');
  });
});

// menu toggle
$(function () {
  $(".menu-toggle").on("click", function () {
    var $toggle = $(this);

    $toggle.toggleClass("active").siblings(".menu-sub").slideToggle();

    $toggle.siblings(".menu-mega").children(".menu-sub").slideToggle();

    $toggle.parent().siblings(".menu-item-group").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-mega").children(".menu-sub").slideUp();

    $toggle.parent().siblings(".menu-item-group").children(".menu-toggle").removeClass("active");
  });
});

// survey-slider
$(function () {
  const slider = addSwiper(".survey-slider", {
    effect: "fade",
    allowTouchMove: false,
    autoHeight: true
  })[0];

  if (!slider) {
    return;
  }

  $(".js-survey-next").on("click", function (e) {
    e.preventDefault();
    slider.slideNext();
  });
});

// main slider
$(function () {
  addSwiper(".main-slider", {
    navigation: true,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });
});
// art slider
$(function () {
  addSwiper(".art-slider", {
    navigation: true,
    loop: true,
    speed: 600,
    autoHeight: true,
    autoplay: {
      delay: 4000
    }
  });
});

// testimonial-slider
$(function () {
  addSwiper(".testimonial-slider", {
    navigation: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 70,
    autoPlay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1
      }
    }
  });
});

// swiper template
function addSwiper(selector, options = {}) {
  return Array.from(document.querySelectorAll(selector), function (item) {
    var $sliderContainer = $(item),
        $sliderEl = $sliderContainer.find(selector + "__container");

    if (options.navigation) {
      $sliderContainer.addClass("has-nav");
      options.navigation = {
        prevEl: $sliderContainer.find(selector + "__prev"),
        nextEl: $sliderContainer.find(selector + "__next")
      };
    }

    if (options.pagination) {
      $sliderContainer.addClass("has-pagination");
      options.pagination = {
        el: $sliderContainer.find(selector + "__pagination"),
        clickable: true
      };
    }

    return new Swiper($sliderEl, options);
  });
}

// common.js
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});

$(function () {
  $(".faq__tabs .nav-link").on("shown.bs.tab", function () {
    if ($(window).width() > 767) {
      return;
    }

    const $content = $("#faq-content");

    if (!$content.length) {
      return;
    }

    $("html, body").animate({
      scrollTop: $content.offset().top - 60
    }, 800);
  });
});

$(function () {
  const $popup = $(".popup");

  if (!$popup.length) {
    return;
  }

  if (window.sessionStorage.firstVisit) {
    return;
  }

  window.sessionStorage.firstVisit = true;
  const delay = parseInt($popup.data("delay"));

  setTimeout(function () {
    $popup.modal("show");
  }, delay ? delay * 1000 : 10000);
});