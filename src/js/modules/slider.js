import $ from "jquery";
import "slick-carousel";

$(".stories-slider").slick({
  arrows: true,
  prevArrow:
    '<button type="button" class="prev-slide"><span class="icon-prev"></span></button>',
  nextArrow:
    '<button type="button" class="next-slide"><span class="icon-next"></span></button>',
  dots: false,
  autoplay: false,
  rows: 0,
  slidesToShow: 1,
  infinite: false,
});

let $status = $(".stories-counter");
let $slickElement = $(".stories-slider");

$slickElement.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + " " + "/" + " " + slick.slideCount);
  }
);
