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
new Swiper('.card-wrapper-team',{
    loop: true,
    spaceBetween:-100,

    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.s-button-next-team',
      prevEl: '.s-button-prev-team',
    },

    breakpoints: {
        0: {
            slidesPerView:1,
            spaceBetween:0
        },
        768: {
            slidesPerView: 2,
            spaceBetween:0
        },
        1024: {
            slidesPerView: 3
        },
    }
});