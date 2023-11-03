var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper2 = new Swiper(".customer-review", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1199px
      1199: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });