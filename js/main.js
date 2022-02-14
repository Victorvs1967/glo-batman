const swiper = new Swiper('.main__slider', {
  spaceBetween: 30,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.main__slider-arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

const burger = document.querySelector('.header__menu-open'),
      close = document.querySelector('.header__menu-close'),
      play = document.querySelector('.main__play-button'),
      header = document.querySelector('.header'),
      modal = document.querySelector('.modal');


burger.addEventListener('click', () => header.style.display = 'block');
close.addEventListener('click', () => header.style.display = '');

play.addEventListener('click', () => modal.classList.remove('close'));
modal.addEventListener('click', () => modal.classList.add('close'));