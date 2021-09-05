$(function(){

  $(window).on('mousewheel',function(e){
      var wheel = e.originalEvent.wheelDelta;
      
      // console.log(wheel)
      //스크롤값을 가져온다.
      if(wheel>0){
      //스크롤 올릴때
      $(".menu_top").removeClass('fix')
      } else {
      //스크롤 내릴때
      $(".menu_top").addClass('fix')
      }
    });




  const mainSwiper = new Swiper(".main-swiper", {
    
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    speed:800,
    pagination: {
      el: ".main-slide .swiper-pagination",
      clickable: true,
    },
 

 });

  const liveanywhere = new Swiper(".live-swiper", {
    slidesPerView: "auto", 
    spaceBetween: 10,
  
 });

 //each 갯수만큼 돌는 것

 function list(category,list){
  $.getJSON('js/data.json', null, function(data, status){
     if (status == "success"){
      var result = data.filter(function (parm) {return parm.cate == category });
      var html = '';
       $.each(result, function(index, item){
        //alert(entry['name'])
        html += '<div class="swiper-slide">'
        html += '<a href="">'
        html += '<img src="' + item.src + '" alt="">'
        html += '<div class="txt_wrap">'
        html += '<strong>'+item.title+'</strong>'
        html += '<em>'+item.desc+'</em>'
        html += '</div>'
        html += '</a>'
        html += '</div>'

      });

       $(list).find('.swiper-wrapper').append(html)
       //livewhere 이라고 들어간것 

      }else if (status == "error" || status == "parsererror" ){
        alert("An error occured");
      }

      const wishlist = new Swiper(".wishlists-swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 10,
      
     });


  });


}

list('wish','.live-swiper');
  


 $('.wishlists .heart').click(function(e) {
  e.preventDefault();
  if($(this).find('i').hasClass('fi-sr-heart')){
    $(this).find('i').removeClass('fi-sr-heart')

  }else {
  $(this).find('i').addClass('fi-sr-heart')
}
})

  
 const theme = new Swiper(".theme-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
  
 });

 const newthisweek = new Swiper(".hosting-swiper", {
    slidesPerView: "1",
    loop: true,
    spaceBetween: 35,
    pagination: {
      el: ".hosting .swiper-pagination",
      clickable: true,
    },
  
 });

 

$(".fixed_menu .fixed_menu_profile").click(function () {
  $('body').addClass('hidden')
  $(".menu_profile").addClass('on')

});
$(".menu_profile .close_btn").click(function () {
  $('body').removeClass('hidden')
  $(".menu_profile").removeClass('on')
});

const resentSearch = new Swiper(".resent_search-swiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".resent_search-swiper .swiper-pagination",
    clickable: true,
  },
});

$(".menu_top .search").click(function () {
  $('body').addClass('hidden')
  $(".search_bg").addClass('on') 
});
$(".search_close_btn").click(function () {
  $('body').removeClass('hidden')
  $(".search_bg").removeClass('on')
});



});

