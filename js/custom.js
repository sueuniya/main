$(function(){
  //메뉴 나타나기//
  $(".menu_btn").click(function(){

  if($(this).hasClass("open")){
    $(".menu_bg").animate({"left":"-100%"},500);
    $(".menu_btn").removeClass("open");
  }else{
    $(".menu_bg").animate({"left":"0"},500);
    $(".menu_btn").addClass("open");

  }
})

//메뉴 호버시 색상변화//
$(".gnb	li").hover(function(){
    $(".gnb	li").addClass("no_active")
  $(this).addClass("active")
}, function(){
    $(".gnb	li").removeClass("no_active")
  $(this).removeClass("active")
    })


//슬라이드 이동//
    var swiper = new Swiper('.main-slide', {
      direction: 'vertical',
      parallax: true,
	  	mousewheel: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		  },
		  navigation: {
			nextEl: '.next_btn',
			prevEl: '.prev_btn',
		  },
    });

//원하는 슬라이드로 이동//
$('.gnb li').click(function(){
  swiper.slideTo($(this).index());
  $(".menu_bg").animate({"left":"-100%"},500);
  $(".menu_btn").removeClass("open");
})





})
