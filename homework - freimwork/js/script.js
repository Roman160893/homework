$(document).ready(function () {
   $(".burger").click(function (event) {
      $(".burger,.burger__menu").toggleClass("active")
   })
})
$(document).ready(function () {
   $(".bell").click(function (event) {
      $(".bell__menu,.bell").toggleClass("active")
   })
})

const list = document.querySelectorAll('.main__user-category-name')
list.forEach(item => {
   item.addEventListener('click', (e) => {
      list.forEach(el => { el.classList.remove('active'); });
      item.classList.add('active')
   })
})
