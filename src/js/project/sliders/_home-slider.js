import Swiper from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

const newsHeader = document.querySelector(".news-block__header");

if (document.querySelector(".news-block__swiper")) {
  const swiperContainer = document.querySelector(".news-block__swiper");
  const swiper = new Swiper(swiperContainer, {
    speed: 800,
    slidesPerGroup: 1,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    navigation: {
      nextEl: newsHeader.querySelector(".swiper-controls__button--next"),
      prevEl: newsHeader.querySelector(".swiper-controls__button--prev"),
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}
