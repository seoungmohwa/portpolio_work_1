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






/* 편의생활 스와이퍼 */
  function SwiperBox1__init() {
    const swiper = new Swiper('.swiper-box-1 .swiper', {
      loop: true,
      pagination: {
        el: ".swiper-box-1 .swiper-pagination",
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





 
var swiper = new Swiper(".promotion_Swiper ", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    
  },
});


var swiper = new Swiper(".dining_Swiper ", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    
  },
});
