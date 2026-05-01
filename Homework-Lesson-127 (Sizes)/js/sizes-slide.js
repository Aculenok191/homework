export const sizesSlider = () => {
  new Swiper(".sizes__slider", {
    slidesPerView: "auto",
    // Центрируем
    centeredSlides: true,
    // бесконечный зацикленный свайпер
    loop: true,
    // прокрутка с помощью колесика мыши
    mousewheel: {
      forceToAxis: true,
    },
    //настраиваем кнопки для навигации
    navigation: {
      prevEl: ".sizes__slider-button--prev",
      nextEl: ".sizes__slider-button--next",
    }
  });
};
