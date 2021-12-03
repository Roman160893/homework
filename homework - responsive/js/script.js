$(document).ready(function () {
   $.each($(".what__content-left-checkbox"), function (index, val) {
      if ($(this).find("input").prop("checked") == true) {
         $(this).addClass("active");
      }
   });
   $(document).on('click', '.what__content-left-checkbox', function (event) {
      if ($(this).hasClass('active')) {
         $(this).find('input').prop('checked', false);
      } else {
         $(this).find('input').prop('checked', true);
      };
      $(this).toggleClass('active');

      return false;
   });
})
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   spaceBetween: 36,
   loop: true,
   centeredSlides: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   initialSlide: 2,
   loop: true,
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 30,
      },
      720: {
         lidesPerView: 4,
         spaceBetween: 36,
      },
   }
});



