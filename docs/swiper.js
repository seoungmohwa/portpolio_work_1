
/* 메인메뉴 스와이퍼 */
var swiper = new Swiper(".main_bg_swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});



/* 다이닝 스와이퍼 */
  var tab = new Swiper(".tab-content", {
     slidesPerView: 1,
     autoHeight: true,
     spaceBetween: 30,

  
    thumbs: {
      swiper: {
        el: ".tab-menu",
        slidesPerView:'auto',
        spaceBetween: 50
      }
    }

  
  });


/* 편의생활 스와이퍼 */
  function SwiperBox1__init() {
    const swiper = new Swiper('.swiper-box-1 .swiper', {
      loop: true,
      autoHeight: true,
     
      pagination: {
        el: ".swiper-box-1 .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // 화면의 넓이가 320px 이상일 때
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
          slidesPerGroup: 1,
          centeredSlides: true,
          navigation: {
            nextEl: '.swiper-box-1 .swiper-button-next',
            prevEl: '.swiper-box-1 .swiper-button-prev',
          }
        },
        // 화면의 넓이가 800px 이상일 때
        800: {
            
            spaceBetween:60,
            slidesPerView: 1.2,  
            slidesPerGroup: 1,
            centeredSlides: true,
            navigation: {
              nextEl: '.swiper-box-1 .swiper-button-next',
              prevEl: '.swiper-box-1 .swiper-button-prev',
            }
        }
      }
    });
  }
  SwiperBox1__init();




  console.clear();

  function TopBar__init() {
    $(window).scroll(function() {
      let scrollTop = $(window).scrollTop();
  
      if ( scrollTop == 0 ) {
        $('header').removeClass('hover');
      }
      else {
        $('header').addClass('hover');
      }
    });
  }
  
  TopBar__init();

