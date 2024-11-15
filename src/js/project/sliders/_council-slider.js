import Swiper from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

  const councilPeople = document.querySelector(".council-block__wrapper");
  const councilBlock = document.querySelector(".council-block__swiper");

  if (councilBlock && councilPeople) {
    new Swiper(councilBlock, {
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
