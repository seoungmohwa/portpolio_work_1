
// 햄버거 메뉴

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


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
  
  