
// --------------上スクロールボタン
$(function(){
  let btn = $('.firstpage-p');
  btn.hide();

  // スクロールして80pxしたら表示
  $(window).scroll(function(){
    if($(this).scrollTop() > 80){
    btn.fadeIn(1000);
  }else{
    btn.fadeOut(300);
  }
});

btn.click(function(){
  $('body,html').animate({
    scrollTop:0
  },500 );

  return false;
});

});


// --------------navボタン
$(function() {
  $('.header-nav-item2').click(function() {
    $('.toggle-nav').toggle();
  });
});


// --------------course 画像拡大
$(function(){
  $('.course-item a').click(function(){
    const imgSrc = $(this).children().attr('src');
    $('.bigimg').children().attr('src', imgSrc);
    $('.model').fadeIn();
    $('body,html').css('overflow-y','hidden');
    return false
  });

  $('.close-btn').click(function(){
    $('.model').fadeOut();
    $('body,html').css('overflow-y','visible');
    return false
  });
});