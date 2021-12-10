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

/* new Swiper('.services-slider',{

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
}); */
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

const servicesField = document.querySelector('.services')
const servicesSlider = document.querySelector('.services-slider')
let pageOffseet = window.pageYOffset
servicesField.addEventListener('wheel', function (){
  let translatePosition = 0;
  if(pageOffseet < window.pageYOffset){
    console.log('вниз/влево');
    console.log(pageOffseet);
    servicesSlider.style.transform = `translateX(${this.d = (this.d | 0) - 10}%)`
    console.log(servicesSlider.style.transform);
  }else{
    console.log('вверх/вправо');
    console.log(pageOffseet);
    servicesSlider.style.transform = `translateX(${this.d = (this.d | 0) + 10}%)`

  }
  pageOffseet = window.pageYOffset
})
const Scroll = function(event){
  if(event.target.classList.contains('services') || event.target.closest('.services')){
    console.log('мышь над нужным блоком');
  }
}

document.addEventListener('mouseover', Scroll)


//Вылеташки
const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll)

    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            //Ниже указана переменная, которая показывает позицию объекта относительно верха документа
            const animItemOffset = getBoundingClientRect(animItem).top;
            //Коэфициент, регулирующий момент начала анимаци
            const animStart = 4;

            let animItemPoint = window.innerHeight /* высота окна браузера */ - animItemHeight / animStart;
            //Для случаев, когда высота анимированного объекта больше высоты окна браузера
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            //pageYOffset-свойство, которое возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх)
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("active")
            } else {
                if (!animItem.classList.contains("anim-no-hide")) {
                    animItem.classList.remove("active")
                }
            }
        }

    }
    function getBoundingClientRect(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    //Общая задержка вызова ф-ции
    setTimeout(() => {
        animOnScroll()
    }, 500);

}