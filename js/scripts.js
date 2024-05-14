// sticky menu
$(window).scroll(function(){
      if($(window).scrollTop() > 100){
        $(".menu").addClass("stickumenu")
      }else{
        $(".menu").removeClass("stickumenu")
      }
  })


// banner slider

$('.banner-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    prevArrow:'<i class="fas fa-arrow-left prev"></i>',
    nextArrow:'<i class="fas fa-arrow-right next"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false,
        }
      }
    ]
  });


// service slider


$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode:true,
  centerPadding:"0",
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        vertical: false,
        prevArrow:'<i class="fas fa-angle-left prev"></i>',
        nextArrow:'<i class="fas fa-angle-right next"></i>',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        vertical: false,
        prevArrow:'<i class="fas fa-angle-left prev"></i>',
        nextArrow:'<i class="fas fa-angle-right next"></i>',
      }
    }
  ]
});


// testimonial slider


$('.testi-img-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  asNavFor: ".testi-text-slider",
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:true,
        vertical: false,
        prevArrow:'<i class="fas fa-angle-left prev"></i>',
        nextArrow:'<i class="fas fa-angle-right next"></i>',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:true,
        vertical: false,
        prevArrow:'<i class="fas fa-angle-left prev"></i>',
        nextArrow:'<i class="fas fa-angle-right next"></i>',
      }
    }
  ]
});

$('.testi-text-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testi-img-slider",
  fade: true,
});


// counter slider

$('.counter').counterUp({
  delay: 10,
  time: 1000
});


// team slider

$('.team-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    }
  ]
});

// footer images 

$('.footerimg-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
      }
    }
  ]
});

