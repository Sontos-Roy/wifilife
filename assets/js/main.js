$(document).ready(function(){
  $('.toggler').on('click', function(){
    $('.sidebar').css('left', '0');
    $('.overlay').css('visibility', 'visible');
    $('.overlay').css('opacity', '1');
  });
  $('.dismiss').on('click', function(){
    $('.sidebar').css('left', '-280px');
    $('.overlay').css('visibility', 'hidden');
    $('.overlay').css('opacity', '0');
  });
  $('.overlay').on('click', function(){
    $('.sidebar').css('left', '-280px');
    $('.overlay').css('visibility', 'hidden');
    $('.overlay').css('opacity', '0');
  });
})
var lastScrollTop = 0;
$('.m-fixed-bar').css('top', '-55px');
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
     $('.m-fixed-bar').css('top', '0');
    } else {
        $('.m-fixed-bar').css('top', '-55px');
   }
   lastScrollTop = st;
});
$(document).on('ready', function () {
  $('.cover-slick').slick({
      slideToShow: 1,
      fade: true,
      arrows: true,
      dots: true,
      infinite: true
  });
});
$(document).on('ready', function () {
  $('.product-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      arrows: true, 
      responsive: [
          {
          breakpoint: 1224,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
          }
          },
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
  });
  $('.product-slide').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true, 
      
  });
});

$(document).ready(function(){
  var quantity = parseInt($('.quantity').val());
  $('.quantity-box').parent().find('.increase').click(function(){
    $(this).parent().find('.quantity').val(quantity++)
  })
  $('.quantity-box').parent().find('.decrease').click(function(){
    if(quantity >= 1){
      $(this).parent().find('.quantity').val(quantity--)
    }
  })
})

$(document).ready(function(){
  $('.filter-dropdown').hide();
  $('#filter').click(function(e){
    e.preventDefault();
    $('.filter-dropdown').slideToggle();
  })
})

const myPanzoom = new Panzoom(document.querySelector(".panzoom"), {
  minScale: 1,
  maxScale: 2
});