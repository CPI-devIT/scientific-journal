import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  const councilPeople = document.querySelector(".council-page__wrapper");
  const councilBlock = document.querySelector(".council-page__swiper");

  if (councilBlock && councilPeople) {
    const swiper = new Swiper(councilBlock, {
      speed: 800,
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 10,

      navigation: {
        nextEl: councilPeople.querySelector(".swiper-controls__button--next"),
        prevEl: councilPeople.querySelector(".swiper-controls__button--prev"),
        disabledClass: "swiper-controls__button--disabled", // Убедитесь, что здесь правильный класс
      },
    });
  }
});
