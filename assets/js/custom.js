"undefined" != typeof AOS && AOS.init({
        duration: 700,
        easing: "ease-out-quad",
        //once: !0,
        startEvent: "load"
    });
// header fixed
var header = new Headroom(document.querySelector("#header"), {
tolerance: 5,
offset : 205,
classes: {
  initial: "animated",
  pinned: "slideDown",
  unpinned: "slideUp"
}
});
header.init();

//swiper iso
var swiper = new Swiper('.swiper-container2', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 576px
    375: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
});