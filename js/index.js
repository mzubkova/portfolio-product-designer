$(function () {
  $(".carousel__slider").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $("#tabs").tabs();
});

$("#navToggle").click(function () {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked");
});
$(".overlay").click(function () {
  $(this).removeClass("open");
  $(".navBurger").removeClass("active");
});