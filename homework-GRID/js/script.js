new Swiper(".comments__contents", {
   //кількість слайдів для показу
   slidesPerView: 2, 
   //кількість слайдів для показу 
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   //Cтрілки
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },
   //нумерацией страниц
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //зміна буллетів в залежності від відстані до нього
      //dynamicBullets: true,
      
   },
   //отступ між слайдами
   spaceBetween: 20,
   //Брекпоінти при ширинах екрану
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      1024: {
         slidesPerView: 2,
         spaceBetween: 20
      }
   }
});
