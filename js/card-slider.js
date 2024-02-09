const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination-button',
      bulletActiveClass: 'pagination-button--active',
    },
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev',
    },
  });