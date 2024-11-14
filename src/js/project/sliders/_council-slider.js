import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  const councilPeople = document.querySelector(".council-page__wrapper");
  const councilBlock = document.querySelector(".council-page__swiper");

  if (councilBlock && councilPeople) {
    const swiper = new Swiper(councilBlock, {
      speed: 800,
      navigation: {
        nextEl: councilPeople.querySelector(".swiper-controls__button--next"),
        prevEl: councilPeople.querySelector(".swiper-controls__button--prev"),
      },
      on: {
        init: function () {
          if (!this.isBeginning) {
            // Убираем непрозрачность у кнопки "предыдущий"
            councilPeople.querySelector(".swiper-controls__button--prev").classList.remove("swiper-controls__button--disabled");
          }
        },
        slideChange: function () {
          const prevButton = councilPeople.querySelector(
            ".swiper-controls__button--prev",
          );
          const nextButton = councilPeople.querySelector(
            ".swiper-controls__button--next",
          );

          // Проверяем статус кнопок при каждом изменении слайда
          if (this.isBeginning) {
            prevButton.classList.add("swiper-controls__button--disabled");
          } else {
            prevButton.classList.remove("swiper-controls__button--disabled"); // Убираем класс
          }

          if (this.isEnd) {
            nextButton.classList.add("swiper-controls__button--disabled"); // Добавляем класс для отключенной кнопки
          } else {
            nextButton.classList.remove("swiper-controls__button--disabled"); // Убираем класс
          }
        },
      },
    });
  }
});
