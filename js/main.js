const swiper = new Swiper('.main__slider', {
  slidesPerView: 2,
  spaceBetween: 29,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main__slider-arrow',
  },
});