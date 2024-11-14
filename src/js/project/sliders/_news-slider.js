import Swiper from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

const newsHeader = document.querySelector(".news-block__header");
const newsBlock = document.querySelector(".news-block__swiper")

if (newsBlock) {
    new Swiper(newsBlock, {
      speed: 800,
      spaceBetween: 10,
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,

      navigation: {
        nextEl: newsHeader.querySelector(".swiper-controls__button--next"),
        prevEl: newsHeader.querySelector(".swiper-controls__button--prev"),
      },
    });
}
