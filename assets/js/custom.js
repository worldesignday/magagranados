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
$(function() {
  var topoffset = 70; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.nav-item a').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 900);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

});

$(document).ready(function() {
$("#ackapa").click(function() {
$(".trwpwhatsappballon").toggle(1000);
});
$("#kapatac").click(function() {
$(".trwpwhatsappballon").toggle(1000);
});
});