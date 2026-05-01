export const productSlider = () => {
  new Swiper(".product__slider", {
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
      prevEl: ".product__slider-button--prev",
      nextEl: ".product__slider-button--next",
    }
  });
};
