import Swiper from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

if (document.querySelector(".news__swiper")) {
  const swiperContainer = document.querySelector(".news__swiper");
  const swiper = new Swiper(swiperContainer, {
    speed: 800,
    slidesPerGroup: 1,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    navigation: {
      nextEl: document.querySelector(".swiper-controls__button--next"),
      prevEl: document.querySelector(".swiper-controls__button"),
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }}
  });
}
