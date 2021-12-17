(function () {
   // get's all video wrapper divs
   var youtube = document.querySelectorAll(".youtube");
   // iterates through all the divs
   for (var i = 0; i < youtube.length; i++) {
      /* 
      gets the video id we mentioned in the data-embed attribute
      to generate image thumbnail urls, youtube has several
      resolutions.
      - mqdefault 320 x 180
      - hqdefault 480 x 360
      - sddefault - 640 x 480
      - maxresdefault - 1920 x 1080
      */
      var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
      /*
      creates new image and sets the source attribute to the thumbnail
      url we generated above and sets it to load the image on page load
      */
      var image = new Image();
      image.src = source;
      image.addEventListener("load", function () {
         youtube[i].appendChild(image);
      }(i));
      /*
      below is where the magic happens, we attach click listeners to the 
      video embed divs and when clicked we create a new iframe and sets
      it inside the video wrapper div and only then will the js files
      associated with the embedded video be loaded
      */
      youtube[i].addEventListener("click", function () {
         var iframe = document.createElement("iframe");
         iframe.setAttribute("frameborder", "0");
         iframe.setAttribute("allowfullscreen", "");
         iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
         this.innerHTML = "";
         this.appendChild(iframe);
      });
   };
})();
// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
   const player = new YT.Player('video', {
      height: '390',
      width: '640',
      playerVars: { rel: '0', showinfo: '0' },
      videoId: 'M7lc1UVf-VE',
   });
}

window.onload = function () {
   document.body.classList.add('loaded');
}

new Swiper(".slides__conteiner", {
   //кількість слайдів для показу
   slidesPerView: 1,
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
   // breakpoints: {
   //    // when window width is >= 320px
   //    320: {
   //       slidesPerView: 1,
   //       spaceBetween: 20
   //    },
   //    1024: {
   //       slidesPerView: 2,
   //       spaceBetween: 20
   //    }
   // }
});