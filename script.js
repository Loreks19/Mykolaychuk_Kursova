new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.s-button-next',
      prevEl: '.s-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });
  