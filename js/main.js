$(document).ready(function(){
  $('.pricings__slider').slick({
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    responsive: [{
      breakpoint: 940,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });
});