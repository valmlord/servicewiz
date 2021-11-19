import $ from "jquery";
import "slick-carousel";

$(".stories-slider").slick({
  arrows: true,
  dots: false,
  autoplay: false,
  rows: 0,
  slidesToShow: 1,
  infinite: false,
  prevArrow: $(".stories-slider__nav-left"),
  nextArrow: $(".stories-slider__nav-right"),
});
