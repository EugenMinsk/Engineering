$(function () {

  $(".video-popup").magnificPopup({
    delegate: "a",
    type: "iframe",
    tLoading: "Loading iframe #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    iframe: {
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });
});

new Swiper('.services-slider',{

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: {
    sensitivity: 2,
  },
  slidesPerView: 'auto',
  spaceBetween: 80,

  breakpoints: {

  }
});
new Swiper('.exam-slider',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  /* scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  }, */
  mousewheel: {
    sensitivity: 2,
  },
  slidesPerView: 'auto',
  spaceBetween: 20,

  breakpoints: {

  }
});