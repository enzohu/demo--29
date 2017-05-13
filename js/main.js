$(function () {
  // 轮播
  var swiper = new Swiper('#siteBanners > swiper-wrapper', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
  });

  
$(document).on('click', 'a', function (event) {
    event.preventDefault();

    let anchor = $.attr(this, 'href')
    let top = $(anchor).offset().top
    $('html,body').animate({
      scrollTop: top
    }, 500);
  });
})