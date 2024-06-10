$(document).ready(function () {
    $('.banner-area').slick({
        autoplay: true,
        speed: 800,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        fade:true
      });


if ($('.slick-slide').hasClass('.slick-active')) {
    $('.banner-text').addClass('animated fadeInUp');
  }else{
    $('.banner-text').removeClass('animated fadeInUp');
  }
  $(".banner-area").on("beforeChange", function(){
    $('.banner-text').removeClass('animated fadeInUp').hide();
    setTimeout(()=>{
        $('.banner-text').addClass('animated fadeInUp').show();
    },1000);
  })


});


$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  

  