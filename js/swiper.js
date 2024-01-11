
new Swiper(".swiper__container", {
  grabCursor: false,
  speed: 500,
  autoHeight: true,
  initialSlide: 1,
  // grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    // dynamicMainBullets: 3,
    clickable: true,

  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

